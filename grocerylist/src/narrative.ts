import { BotTurn } from "narratory"
import * as intents from "./nlu"

const greeting: BotTurn = {
  say: ["Welcome to the grocery store", "Welcome to the grocery shopper"],
  set: {
    groceryList: null,
    products: intents.productsAsList()
  }
}

const purpose: BotTurn = {
  say: ["I can help you by creating a shopping list", "I'll help you create a shopping list"]
}

const modifyList: BotTurn = {
  label: "MODIFY_LIST",
  say: {
    cond: {
      groceryList: null
    },
    text: "Let's start. What do you want to add to the list?"
  },
  user: [
    {
      intent: intents.addProductsToList, // User gave us atleast one product in stock
      bot: {
        say: [
          {
            cond: { unknown: null }, // User only gave us products we have in stock
            text: [
              "Absolutely. _product.",
              "Okay, adding _product to the list.",
              "Great, _product. List is now _groceryList."
            ]
          },
          { // User also gave us some unknown input, likely a product not in stock
            text: [
              "Ok. _product made the list but I don't have _unknown unfortunately",
              "Added _product but couldn't add _unknown since we don't have it"
            ]
          }
        ],
        set: {
          groceryList: "+_product"
        }
      }
    },
    {
      intent: intents.addUnknownToList, // User didn't give us any product we have in stock
      bot: {
        say: "We don't have that unfortunately. Wanna pick one of our regular items?",
        repair: true
      }
    },
    {
      intent: intents.removeProductsFromList,
      bot: {
        say: "Okay, removing _product. List is now _groceryList.",
        set: {
          groceryList: "-_product"
        }
      }
    },
    {
      intent: intents.queryProducts,
      bot: {
          url: "https://europe-west1-narratory-1.cloudfunctions.net/groceries",
          set: {
            asList: true,
          },
          params: ["asList"],
          say: "Our regular products are _products",
          bot: [{
            cond: { todaysSpecials: true },
            say: "And our specials for today are _todaysSpecials",
            repair: true
          }, {
            say: "We don't have any specials today",
            repair: true
          }]
      }
    },
    {
      intent: intents.queryList,
      bot: {
        say: ["List is now _groceryList.", "So far we have _groceryList."]
      }
    },
    {
      intent: intents.resetList,
      bot: {
        say: "Are you sure you want to reset the list?",
        user: [
          { intent: intents.No, bot: "That's what I thought!" },
          {
            intent: intents.Yes,
            bot: {
              set: {
                groceryList: null
              },
              say: "As you wish! List is empty. What do you want to add to it?",
              repair: "PARENT" // Since we don't want to execute the continueModifying turn below
            }
          }
        ]
      }
    },
    {
      intent: intents.NotSure,
      bot: {
        say: "No problems. Take your time"
      }
    },
    {
      intent: intents.No,
      bot: {
        say: "Alright",
        goto: "SUMMARY"
      }
    }
  ]
}

const continueModifying: BotTurn = {
  say: [
    "Now, do you want to add anything more to your list?",
    "Want to add something?",
    "Missing anything on the list?",
    "Should I add anything else?",
    "Do you want to add anything else?"
  ],
  goto: "MODIFY_LIST"
}

const summary: BotTurn = {
  label: "SUMMARY",
  say: ["The final list is _groceryList", "Now, your list is _groceryList"]
}

const goodbye = "Thank you and goodbye for now!"

export default [greeting, purpose, modifyList, continueModifying, summary, goodbye]
