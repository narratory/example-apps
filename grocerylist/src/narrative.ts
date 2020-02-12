import { BotTurn } from "narratory"
import * as intents from "./nlu"

// Our greeting state, and setting up some initial variables
const greeting: BotTurn = {
  say: ["Welcome to the grocery store", "Welcome to the grocery shopper"],
  set: {
    groceryList: null, // Set an empty list to begin with
    initial: true, // Used for condition in the modifyList turn

    /* Set a product variable containing all our standard products so that they can
    be used in speech below. Note, we could have done this in the frontend just as well, but 
    by letting the backend handle it for us we can use the & and | syntax to automatically add
    the right conjunction.
    */
    standardProducts: intents.product.enums.map(it => it.name)
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
          {
            // User also gave us some unknown input, likely a product not in stock
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
        say: "We don't have that unfortunately. Wanna pick one of our regular items?"
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
        /*
          First we query our API for today's specials, then we forge an answer 
          using this BridgeTurn, i.e a BotTurn with a subsequent BotTurn based
          on the condition that we receive todaysSpecials from the backend. 

          We set a variable asList to be able to pass it to the backend. The reason 
          is that we use the same endpoint to both set the variable todaysSpecials
          so that we can use it in the output here, but also in the DynamicEntity 
          (see nlu.ts) to provide us with the proper Enums neeeded to add
          the specials to our language model.
        */
        set: {
          asList: true
        },
        url: "https://europe-west1-fruitseller-ptkgrc.cloudfunctions.net/specials",
        params: ["asList"],
        say: "Our regular products are _standardProducts", // We put a say in the BridgeTurn to avoid repeating it for the conditioned turns next
        bot: [
          {
            cond: { todaysSpecials: true },
            say: "And our specials for today are _todaysSpecials"
          },
          {
            say: "We don't have any specials today"
          }
        ]
      }
    },
    {
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
      intent: intents.queryStandardProducts,
      bot: "Our regular products are _standardProducts"
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
    "Now, do you want to add anything more to your list?",
    "Want to add something?",
    "Missing anything on the list?",
    "Should I add anything else?",
    "Do you want to add anything else?"
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
