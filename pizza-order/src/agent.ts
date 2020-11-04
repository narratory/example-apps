import { Agent, Language } from "narratory"
import { narrative } from "./narrative"
import { userInitiatives, botInitiatives } from "./userInitiatives"
import narratoryCredentials from "../narratory_credentials.json" // Populate this file with your Narratory key. Sign up att narratory.io if you don't have one!
import googleCredentials from "../google_credentials.json" // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.

const agent: Agent = {
  agentName: "PizzaOrder",
  language: Language.English,
  narrative, // See the file narrative.ts
  userInitiatives, // See the file userInitiatives.ts
  botInitiatives: botInitiatives,
  bridges: [],
  narratoryKey: narratoryCredentials.narratoryKey,
  googleCredentials: googleCredentials 
}

export default agent
