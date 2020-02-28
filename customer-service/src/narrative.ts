import { BotTurn, ANYTHING, EXIT } from "narratory"
import * as nlu from "./nlu"
import { endSession } from "./partials"
import { orderNarrative } from "./order/queryOrder"
import { paymentNarrative } from "./payment/queryPayment"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting: BotTurn = {
  say: ["Hi there", "Greetings", "hello"],
  set: {
    initial: true
  }
}

const offerHelp: BotTurn = {
  label: "OFFER_HELP",
  say: [
    {
      cond: { initial: true },
      text: "What can I help you with?"
    },
    "Can I help with anything else?"
  ],
  user: [
    {
      intent: nlu.queryProblem,
      bot: [
        {
          cond: {
            problem: "order"
          },
          say: "Alright",
          goto: "QUERY_ORDER"
        },
        {
          cond: {
            problem: "payment"
          },
          say: "Okay",
          goto: "QUERY_PAYMENT"
        },
        {
          say: "Cond didn't work here...",
          repair: true
        }
      ]
    },
    {
      intent: nlu.Yes,
      bot: {
        say: "Is that problems with your order, or maybe with your payment?",
        repair: true
      }
    },
    {
      intent: nlu.No,
      bot: {
        say: "Okay",
        goto: "END"
      }
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { turnCount: 0 },
          say: "For now, I can only help with questions about orders or payments",
          repair: true
        },
        {
          cond: { turnCount: 1 },
          say: "Try saying that you have a problem with your order or your payment",
          repair: true
        },
        endSession
      ]
    }
  ]
}

const goodbye: BotTurn = {
  label: "END",
  say: ["Thanks for today. Goodbye!", "Thanks, goodbye!"]
}

export default [greeting, offerHelp, ...orderNarrative, ...paymentNarrative, goodbye]
