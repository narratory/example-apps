import { BotTurn } from "narratory"
import * as intents from "./nlu"

// Our greeting state, and setting up some initial variables
const greeting: BotTurn = {
  say: ["Welcome to the grocery store", "Welcome to the grocery shopper"],
  set: {
    groceryList: [], // Set an empty list to begin with
    initial: true // Used for condition in the modifyList turn
  }
}

const purpose: BotTurn = {
  say: ["I can help you by creating a shopping list", "I'll help you create a shopping list"]
}

// Our main state
const modifyList: BotTurn = {
  label: "MODIFY_LIST",
  say: {
    cond: {
      initial: true
    },
    text: "Let's start. What do you want to add to the list?"
  },
  user: [
    {
      intent: intents.addProductsToList,
      bot: [
        {
          cond: { product: true }, // If our product slot is set
          say: [
            "Absolutely. _product.",
            "Okay, adding _product to the list.",
            "Great, _product. List is now _groceryList."
          ],
          set: {
            groceryList: "+_product"
          }
        },
        {
          say: ["Sorry. I don't have that", "Unfortunately, I don't have that"]
        }
      ]
    },
    {
      intent: intents.removeProductsFromList,
      bot: [
        {
          cond: {
            groceryList: "_product", // If GroceryList contains our products
            AND: {
              // A trick since we can't have the same parameter twise and we want to check both
              // if the groceryList parameter is isn't empty and not the same as _product
              groceryList: true
            }
          },
          say: [
            {
              cond: { groceryList: true },
              text: "Okay, removing _product. List is now _groceryList."
            },
            "Okay, removing _product. List is now empty"
          ],
          set: {
            groceryList: "-_product"
          }
        },
        {
          say: "I can't do that, you don't have _product on the list."
        }
      ]
    },
    {
      intent: intents.queryProducts,
      bot: "We have most products you'd expect a grocery store to have. And our daily specials"
    },
    {
      /*
          First we query our API for today's specials, then we forge an answer 
          using this BridgeTurn, i.e a BotTurn with a subsequent BotTurn based
          on the condition that we receive todaysSpecials from the backend. 

          We set a variable asList to be able to pass it to the backend. The reason 
          is that we use the same endpoint to both set the variable todaysSpecials
          so that we can use it in the output here, but also in the DynamicEntity 
          (see nlu.ts) to provide us with the proper Enums needed to add
          the specials to our language model.
        */
      intent: intents.querySpecials,
      bot: {
        url: "https://europe-west1-fruitseller-ptkgrc.cloudfunctions.net/specials",
        set: {
          asList: true
        },
        params: ["asList"],
        bot: [
          {
            cond: { todaysSpecials: true },
            say: "Our specials today are _todaysSpecials"
          },
          {
            say: "Sorry, no specials today"
          }
        ]
      }
    },
    {
      intent: intents.queryList,
      bot: {
        say: ["List contains _groceryList.", "So far we have _groceryList."]
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
      intent: intents.Yes,
      bot: "Great, what product should we add?"
    },
    {
      intent: intents.NotSure,
      bot: {
        say: "No problems. Take your time",
        repair: true // Since we don't want to proceed and prompt the user again
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
    {
      cond: { groceryList: null }, // If list is empty
      text: [
        "Do you want to add something to the list?",
        "What should I add to your list?",
        "What should we add?",
        "Want to add something?"
      ]
    },
    {
      // If we have items on the list
      text: [
        "Now, do you want to add anything more to your list?",
        "Missing anything on the list?",
        "Should I add anything else?",
        "Do you want to add anything else?"
      ]
    }
  ],
  set: {
    initial: false
  },
  goto: "MODIFY_LIST"
}

const summary: BotTurn = {
  label: "SUMMARY",
  say: ["The final list is _groceryList", "Now, your list is _groceryList"]
}

const goodbye = "Thank you and goodbye for now!"

export default [greeting, purpose, modifyList, continueModifying, summary, goodbye]
