import { UserTurn, EXIT } from "narratory"
import * as intents from "./nlu"
import { ASK_TICKETS } from "./util"

/*
    User-driven initiatives
*/

// Intent to be used as an implicid invocation phrase
const bookFlightIntent: UserTurn = {
  intent: intents.travel,
  bot: {
    say: ["Absolutely", "Of course"],
    goto: ASK_TICKETS
  }
}

const functionQuery: UserTurn = {
  intent: ["What can I do", "what can you help with", "what can you do"],
  bot: "I can help you book flights!"
}

const exitIntent: UserTurn = {
  intent: ["exit", "stop"],
  bot: {
    say: "Okay, bye bye!",
    goto: EXIT
  }
}

const costQueryIntent: UserTurn = {
  intent: intents.costQuery,
  bot: `I don't know yet unfortunately! In the future, I might be connected to an API to be able to help you with this`
}

export const userInitiatives = [bookFlightIntent, functionQuery, costQueryIntent, exitIntent]
