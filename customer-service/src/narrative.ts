import { BotTurn, ANYTHING, EXIT, BridgeTurn } from "narratory"
import * as nlu from "./nlu"
import { endSession } from "./partials"
import { orderNarrative } from "./order/queryOrder"
import { paymentNarrative } from "./payment/queryPayment"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting = ["Hi there!", "Greetings!", "Hello!"]

const welcome = "Welcome to the one-size-fits-noone T-shirt store customer service."

const offerHelp: BotTurn = {
  label: "OFFER_HELP",
  say: [
    {
      cond: { helped: false },
      text: "What can I help you with?"
    },
    {
      text: "Can I help with anything else?"
    }
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
        },
        {
          say: "Sorry, was that a problem with your payment or your order?",
          repair: true
        },
      ]
    },
    {
      intent: nlu.Yes,
      bot: {
        say: "Is there a problem with your order, or maybe with your payment?",
        repair: true
      }
    },
    {
      intent: nlu.No,
      bot: {
        say: "Okay.",
        goto: "END"
      }
    },
    {
    intent: ["product"],
    bot: {
      say: "I will be able to help out with products soon. For now, I can only help you with problems regarding your order or your payment.",
      bot: {
        say: "Can I help you with something else?",
        repair: true,
      }
    },
},
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { turnCount: 0 },
          say: "Sorry, I didn't get that. Please let me know if you need help with either an order or a payment.",
          repair: true
        },
        {
          cond: { turnCount: 1 },
          say: "Try to state whether your problem is regarding your order or your payment.",
          repair: true
        },
        endSession
      ]
    },
    {
      intent: nlu.queryHumanHandover,
      bot:  
      { say: "Ah, you want to talk to a human! I will be able to connect you with one as soon as my developers teach me how.",
      bot: {
        say: "Do you need help you with your order or your payment? I can help you with that.",
        repair: true,
      }
    }
    },
    {
      intent: ["I don't know", "idk", "you tell me", "About that I can ask", "What can I ask", " I can ask about number of requested", "dunno"],
      bot: {
        say: "I can help you with either your order or your payment.",
        repair: true,
      }
    }
  ]
}

const goodbye: BotTurn = {
  label: "END",
  say: ["Thank you for today. Goodbye!", "Thanks, goodbye!"]
}

export default [greeting, welcome, offerHelp, ...orderNarrative, ...paymentNarrative, goodbye]
