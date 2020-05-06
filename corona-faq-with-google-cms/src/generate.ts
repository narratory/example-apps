import { UserTurn, Intent } from "narratory"
import { GoogleSpreadsheet } from "google-spreadsheet"
import googleCredentials from "../google_credentials.json"
import * as fs from "fs"

// Our sheet and tab IDs, get it from the Google sheet URL. The format is: 
// https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit#gid=<TAB_ID>
const googleSheetId = "ENTER_YOUR_GOOGLE_SHEET_ID"
const googleSheetTabId = "ENTER_YOUR_GOOGLE_SHEET_TAB_ID"

// Creates UserTurns from our hardcoded sheet urls
async function getUserTurnsFromSheet() {
  try {

    // Load our sheet
    const doc = new GoogleSpreadsheet(googleSheetId)
    await doc.useServiceAccountAuth(googleCredentials)
    await doc.loadInfo()
    const sheet = doc.sheetsById[googleSheetTabId]

    // Get all lines from the sheet
    const rows = await sheet.getRows()

    // Container for all our UserTurns
    const userTurns: UserTurn[] = []

    // For each row, we create a new UserTurn
    rows.forEach((row: any) => {
      const intent: Intent = {
        examples: [],
      }

      // Loop over all columns in the row and add examples if the columns is called qx - where x is an integer
      for (let i = 0; i < Object.keys(row).length; i++) {
        const label = `q${i}`
        if (label in row && row[label]) {
          intent.examples.push(row[label])
        }
      }

      // If we have at least one question formulation and we have an answer, we create a UserTurn
      if (intent.examples.length > 1 && row.answer) {
        const userTurn: UserTurn = {
          intent,
          bot: row.answer,
        }
        userTurns.push(userTurn)
      } else {
        console.log("Skipped userTurn due to missing examples or bot answer")
      }
    })
    // Finally, we return our UserTurns
    return userTurns
  } catch (err) {
    console.log("Error: " + err.message, err.stack)
  }
}

// Generates a file for our FAQ
const generateFaq = async () => {
  const importStr = `import { UserTurn } from "narratory"`

  const userTurns = await getUserTurnsFromSheet()
  
  const faqStr = `export const FAQ : UserTurn[] = ${JSON.stringify(
    userTurns,
    null,
    2
  )}`

  const str = [importStr, faqStr].join("\n\n")

  fs.writeFileSync("src/FAQ.ts", str)
}

generateFaq()
