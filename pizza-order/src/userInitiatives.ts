import { UserTurn, BotTurn, BridgeTurn } from "narratory"
import * as nlu from "./intents.nlu"
import { getBackendUrl } from "./backend/util/getBackendUrl"

/*
    Questions and other user-driven initiatives
*/

const queryPricing: UserTurn = {
  intent: ["What is the price"],
  bot: "the price is 5000$"
}

const removeMain: UserTurn = {
  intent: nlu.removeMainIntent,
  bot: {
    url: getBackendUrl("/order?operation=remove"),
    params: ["orders"],
    bot: [
      {
        cond: {
          removed: true
        },
        say: "Okay, removed the _orders"
      },
      {
        say:
          "I couldn't remove _orders since it doesn't match any item I have added"
      }
    ]
  }
}

const changeSize: UserTurn = {
  intent: nlu.changeSize,
  bot: [
    {
      cond: {
        orderBasket: false
      },
      say: "I haven't registered any pizzas yet"
    },
    {
      say: "Okay",
      url: getBackendUrl("/order?operation=change&param=size"),
      params: ["toSize", "fromSize", "ordinal", "pizza"],
      bot: [
        {
          cond: {
            updated: true
          },
          say: "Consider it done!"
        },
        {
          cond: {
            order: true
          },
          say: "Got it",
          goto: "querySizeChangeTo"
        },
        {
          say: "Okay",
          goto: "querySizeChangeOf"
        }
      ]
    }
  ]
}

// Should really implement several narratives for this to make sense...
// Turn with condition if we have only one order in our list (if not go to the next), where we query if the user wants to change the specific order (Y/N), if N we cancel

const querySizeChangeOf: BridgeTurn = {
  label: "querySizeChangeOf",
  bot: [
    {
      say:
        "I have registered _orderList. Which one do you want to change size for?",
      user: [
        {
          intent: nlu.pizzaSelector,
          bot: {
            url: getBackendUrl("/order?operation=identify"),
            params: ["size", "ordinal", "pizza"],
            bot: [
              {
                cond: {
                  order: true
                },
                say: "Got it"
              },
              {
                say: "Didn't get which pizza you ment, try again!",
                repair: true
              }
            ]
          }
        }
      ]
    }
  ]
}

const querySizeChangeTo: BotTurn = {
  label: "querySizeChangeTo",
  say: "What you wanna change to?"
}

export const botInitiatives = [querySizeChangeOf, querySizeChangeTo]
export const userInitiatives = [queryPricing, removeMain, changeSize]
