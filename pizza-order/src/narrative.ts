import { BotTurn, ANYTHING } from "narratory"
import * as intents from "./intents.nlu"
import { formfillingNarrative } from "./formFilling"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting = ["Hi there, welcome to Pizza corp", "Hey, welcome to Pizza Corp"]

const orderQuery: BotTurn = {
  say: {
    text: "Do you wanna order?"
  },
  set: {
    completedOrders: []
  },
  user: [
    {
      intent: intents.addMain,
      bot: {
        say: "Okay!",
        set: {
          order: "_orders.pop"
        },
        goto: "FORM_FILLING"
      }
    },
    {
      intent: intents.yes,
      bot: {
        say: "Great, what pizzas do you want?",
        repair: true
      }
    },
    {
      intent: intents.no,
      bot: {
        say: "Okay, no worries",
        goto: "end"
      }
    },
    {
      intent: ANYTHING,
      bot: "I didn't catch that, sorry. Try again"
    }
  ]
}

const queryNext: BotTurn = {
  cond: {
    orders: true
  },
  say: "Okay so next up",
  set: {
    order: "_orders.pop"
  },
  goto: "FORM_FILLING"
}

const queryExtras: BotTurn = {
  say: "Do you want something else?",
  user: [
    {
      intent: intents.yes,
      bot: {
        say: "Okay, what do you want?",
        repair: true
      }
    },
    {
      intent: intents.no,
      bot: {
        say: "Okay, great!"
      }
    },
    {
      intent: intents.addMain,
      bot: {
        say: "Okay!",
        set: {
          order: "_orders.pop"
        },
        goto: "FORM_FILLING"
      }
    }
  ]
}

const goodbye = {
  label: "end",
  say: "Here is your order of _orderBasket.length pizzas: _orderList! It will be delivered shortly! Bye for now!"
}

export const narrative = [
  greeting,
  orderQuery,
  ...formfillingNarrative,
  queryNext,
  queryExtras,
  goodbye
]
