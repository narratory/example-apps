import { UserTurn, EXIT } from "narratory"

/*
    Questions and other user-driven initiatives
*/

const exit : UserTurn = {
  intent: ["stop", "bye", "goodbye", "abort"],
  bot: {
    say: "Okay, goodbye!",
    goto: EXIT
  }
}

export default [exit]
