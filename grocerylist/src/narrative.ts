import { BotTurn } from "narratory"
import * as intents from "./nlu"

const greeting: BotTurn = {
  say: ["Welcome to the grocery store", "Welcome to the grocery shopper"],
  set: {
    groceryList: null
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
      intent: intents.addProductsToList,
      bot: {
        say: [
          "Absolutely. _product.",
          "Okay, adding _product to the list.",
          "Great, _product. List is now _groceryList."
        ],
        set: {
          groceryList: "+_product"
        }
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
        say: "The products in stock are " + intents.productsAsList() + ". Tickle your fancy?",
        repair: true
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
              repair: "PARENT" // Since we don't want to execute the addMore turn below
            }
          }
        ]
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

const goodbye = "Goodbye for now!"

export default [greeting, purpose, modifyList, continueModifying, summary, goodbye]
