import { Agent, Language } from "narratory"
import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { FAQ } from "./FAQ"

const agent: Agent = {
  agentName: "CoronaGuiden",
  language: Language.English,
  narrative,
  userInitiatives: [...userInitiatives, ...FAQ], 
  narratoryKey: require("../narratory_credentials.json").narratoryKey,
  googleCredentials: require("../google_credentials.json")
}

export default agent
