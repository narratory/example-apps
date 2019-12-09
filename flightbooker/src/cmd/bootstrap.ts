import agent from "../agent"
import { create, chat, getStartTurnIndex } from "narratory"

async function bootstrap() {
    // Create our agent (or update it, if it already has been created)
    const response = await create(agent)
    if (response) {
        console.log("\nStarting chat session with the new/updated agent\n")
    
        // Start a chat with our agent, in command-line
        await chat(agent, getStartTurnIndex(process.argv, agent))
    } else {
        console.log("Aborting since creation failed")
        process.exit()
    }
}

bootstrap()