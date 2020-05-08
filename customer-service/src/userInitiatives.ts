import { UserTurn } from "narratory"
import * as nlu from "./nlu"

/*
    Questions and other user-driven initiatives
*/

const humanHandover: UserTurn = {
  intent: nlu.queryHumanHandover,
  bot: [
    {
      cond: {
        platform: "handover-demo",
      },
      say: ["Absolutely, I will connect you with a human", "No problem, here is a human"],
      goto: "__HANDOVER",
    },
    {
      say: "I can't do this on this chat-client unfortunately",
    },
  ],
}

export default [humanHandover]
