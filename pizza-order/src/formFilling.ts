import { BotTurn, ANYTHING } from "narratory"
import * as intents from "./intents.nlu"
import { getBackendUrl } from "./backend/util/getBackendUrl"

const startFormFilling: BotTurn = {
  label: "FORM_FILLING",
  say: ""
}

const queryPizza: BotTurn = {
  cond: {
    "order.pizza": null
  },
  say: "Which pizza do you want?",
  user: [
    {
      intent: intents.pizzaIntent,
      bot: {
        say: "A _pizza, got it",
        set: {
          "order.pizza": "_pizza"
        }
      }
    }
  ]
}

const querySize: BotTurn = {
  cond: {
    "order.size": null
  },
  say: "Which size should the _order.pizza be?",
  user: [
    {
      intent: intents.sizeIntent,
      bot: {
        say: "_size size, okay",
        set: {
          "order.size": "_size"
        }
      }
    }
  ]
}

const queryToppings: BotTurn = {
  cond: {
    turnCount: 0
  },
  say: "Do you want any extra toppings on the _order.pizza?",
  user: [
    {
      intent: ANYTHING,
      bot: {
        say: "It really is best as it is. Let's keep it that way."
      }
    }
  ]
}

const orderSummary: BotTurn = {
  say: [
    "Just verifying. A _order.size _order.pizza. Is that correct?",
    "To confirm, a _order.size _order.pizza?"
  ],
  expectShortAnswer: true,
  user: [
    {
      intent: intents.yes,
      bot: {
        say: "Great",
        url: getBackendUrl("/order?operation=add"),
        params: ["order"]
      }
    },
    {
      intent: intents.no,
      bot: {
        say: "Okay, what do you want to change with it?",
        repair: true
      }
    },
    {
      intent: intents.sizeIntent,
      bot: {
        say: "_size size, okay. Otherwise we are good?",
        set: {
          "order.size": "_size"
        },
        repair: true
      }
    },
    {
      intent: intents.pizzaIntent,
      bot: {
        say: "Okay, changing it to _pizza. Otherwise we are good?",
        set: {
          "order.pizza": "_pizza"
        },
        repair: true
      }
    }
  ]
}

export const formfillingNarrative = [
  startFormFilling,
  queryPizza,
  querySize,
  queryToppings,
  orderSummary
]
