import { UserTurn, EXIT } from "narratory"
import * as intents from "./nlu"
import { ASK_TICKETS } from "./narrative"
import user from "./user"

/*
    Questions and other user-driven initiatives
*/

// Intent to be used as an implicid invocation phrase
const bookFlightIntent: UserTurn = {
    intent: intents.travel, followup: {
        say: ["Absolutely", "Of course"],
        goto: ASK_TICKETS
    }
}

const exitIntent: UserTurn = {
    intent: ["exit", "stop"],
    followup: {
        say: "Okay, bye bye!",
        goto: EXIT
    }
}

const costQueryIntent: UserTurn = {
    intent: intents.costQuery, 
    followup: `I don't know yet unfortunately! In the future, I might be connected to an API to be able to help you with this`
}

export default [bookFlightIntent, costQueryIntent, exitIntent]