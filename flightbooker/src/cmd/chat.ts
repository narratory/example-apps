import agent from "../agent"
import { chat, getStartTurnIndex } from "narratory"

console.log("Starting chat [Ctrl/Cmd + C to exit]\n")

// Start a chat with our agent, in command-line

chat(agent, getStartTurnIndex(process.argv, agent))