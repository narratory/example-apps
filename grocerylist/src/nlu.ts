import { Intent, DynamicEntity } from "narratory"

export const Yes: Intent = {
  examples: ["yeah", "yes", "yep", "of course", "absolutely"]
}

export const No: Intent = {
  examples: ["no", "never", "nope", "I don't think so", "noes"]
}

export const NotSure: Intent = {
  examples: ["not sure", "I don't know", "no idea"]
}

export const product: DynamicEntity = {
  name: "product",
  enums: require("./groceries.json"), // Our hardcoded list of groceries. Source: http://usefulenglish.ru/vocabulary/food-main-list
  url: "https://europe-west1-fruitseller-ptkgrc.cloudfunctions.net/specials", // Our dynamic list, fetched from this URL
  type: "AT_RUNTIME" // We fetch the specials on runtime (as opposed to agent create time)
}

export const addProductsToList: Intent = {
  entities: {
    product
  },
  examples: [
    "I want _product and _product",
    "add _product",
    "add _product and _product",
    "_product, _product and _product",
    "_product and _product",
    "add something" // With this, we catch "add x" where x isn't a product
  ]
}

export const removeProductsFromList: Intent = {
  entities: {
    product
  },
  examples: [
    "Remove _product",
    "Remove _product and _product",
    "I don't want _product",
    "Take away _product",
    "take off _product"
  ]
}

export const queryList: Intent = {
  examples: [
    "what is on it",
    "What is on my list",
    "what is on the list",
    "what do I have so far",
    "what do I have",
    "tell me what the list is",
    "what is the list",
    "what groceries is on the list"
  ]
}

export const queryProducts: Intent = {
  examples: [
    "What products do you have",
    "what do you have",
    "tell me what you have",
    "tell me what I can buy",
    "what can I buy",
    "what is in stock",
    "what groceries do you have",
    "what can I add"
  ]
}

export const querySpecials: Intent = {
  examples: [
    "What specials do you have today",
    "what are your specials today",
    "what are today's specials",
    "what is special today",
    "what is today's extra products",
    "what specials can I add"
  ]
}

export const resetList: Intent = {
  examples: ["Reset the list", "restart", "empty the list", "empty it"]
}
