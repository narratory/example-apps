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
      say: "Ah, you want to talk to a human! I will be able to connect you with one as soon as my developers teach me how.",
      set: {
        helped: true,
        goto: "OFFER_HELP",
    },
  },
  ],
}

const greeting: UserTurn = {
  intent: nlu.greeting,
  bot: ["Hi there!", "Hello!", "Hi!"]
}

export default [humanHandover, greeting]
