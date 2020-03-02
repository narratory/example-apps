import { cloudFunction } from "narratory-cloud"
import { shuffleArray } from "./util"

// Global variable that will reset when the cloud function instance is shut down. This will simulate our "days" :-)
let cachedGroceries: string[]

// Method that picks 4 new groceries as specials if we haven't already done so during our "day"
const scrambleTodaysSpecials = () => {
  if (!cachedGroceries) {
    cachedGroceries = shuffleArray([
      ["tomato"],
      ["vegan cheese"],
      ["sallad", "rocket sallad"],
      ["hamburgers", "burgers"],
      ["potato"],
      ["lentils", "red lentils"],
      ["black beans"],
      ["chickpeas"]
    ]).slice(0, 4)
  }
}

// The cloud function, defined here using a Narratory-cloud helper-method
export const specials = cloudFunction(async (req, res) => {
  scrambleTodaysSpecials()

  if (req.body.asList) {
    // Here, we set a variable to be used in speech by the bot (in narrative.ts)
    res.send({
      set: {
        todaysSpecials: cachedGroceries.map(arr => arr[0]) // Return the first synonym of each item only
      }
    })
  } else {
    // Here, we return Enums for our dynamic entity (in nlu.ts)
    res.send(
      cachedGroceries.map(item => {
        return {
          name: item[0], // First synonym becomes our name (main identifier, used in speech)
          alts: item.slice(1) // Any other synonyms are used only for NLU in this app
        }
      })
    )
  }
}, { memory: "1GB" })
