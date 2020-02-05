import { UserTurn, EXIT } from "narratory"

const exitIntent: UserTurn = {
    intent: ["exit", "stop"],
    bot: {
        say: "Okay, bye bye!",
        goto: EXIT
    }
}

export default [exitIntent]