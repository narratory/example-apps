import agent from "../agent"
import { create } from "narratory"

// Update our agent
async function update() {    
    const response = await create(agent)
    if (response) {
        console.log("Success")
    } else {
        console.log("Failure")
    }
    process.exit()
}

update()