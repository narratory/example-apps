import { BotTurn, ANYTHING, EXIT, BridgeTurn } from "narratory"
import * as nlu from "./nlu"
import { endSession } from "./partials"
import { orderNarrative } from "./order/queryOrder"
import { paymentNarrative } from "./payment/queryPayment"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting: BridgeTurn = {
  say: ["Hi there", "Greetings", "Hello"],
  set: {
    initial: true
  },
  bot: ["Welcome to the one-size-fits-noone T-shirt store customer service"]
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
          goto: "QUERY_ORDER" // Go to the order support flow in /order folder
        },
        {
          cond: {
            problem: "payment"
          },
          say: "Okay",
          goto: "QUERY_PAYMENT" // Go to the payment support flow in /payment folder
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
