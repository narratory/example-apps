import { Intent, Entity, entities, DynamicEntity } from "narratory"

export const Yes: Intent = {
    examples: ["yeah", "yes", "of course", "absolutely"]
}

export const No: Intent = {
    examples: ["no", "never", "nope", "I don't think so"]
}

export const NotSure: Intent = {
    examples: ["not sure", "I don't know", "no idea"]
}

export const product : DynamicEntity = {
    name: "product",
    enums: [
        { name: "apple" },
        { name: "banana" },
        { name: "milk" },
        { name: "egg" },
        { name: "couscous" }
    ],
    url: "https://europe-west1-fruitseller-ptkgrc.cloudfunctions.net/specials",
    type: "AT_RUNTIME"
}

export const addProductsToList : Intent = {
    entities: {
        product,
        unknown: entities.any
    },
    examples: [
        "I want _product and _product",
        "I want _product and _unknown",
        "I want _unkown and _product",
        "add _product",
        "add _product and _product",
        "add _product and _unknown",
        "add _unknown and _product",
        "_product, _product and _product",
        "_product and _product",
        "_product and _unknown",
        "_unknown and _product"
    ]
}

export const addUnknownToList : Intent = {
    entities: {
        unknown: entities.any
    },
    examples: [
        "I want _unknown",
        "add _unknown",
        "add _unknown and _unknown"
    ]
    
}

export const removeProductsFromList : Intent = {
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

export const queryList : Intent = {
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

export const queryProducts : Intent = {
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

export const queryStandardProducts : Intent = {
    examples: [
        "What regular products do you have",
        "what do you have regularly",
        "tell me what standard products you have",
        "tell me what you normally have in stock",
        "what standard products do you have",
        "what do you always have",
        "what is in the standard stock",
        "what is always in stock"
    ]
}

export const querySpecials : Intent = {
    examples: [
        "What specials do you have today",
        "what are your specials today",
        "what are today's specials",
        "what is special today",
        "what is today's extra products",
        "what specials can I add"
    ]
}

export const resetList : Intent = {
    examples: [
        "Reset the list",
        "restart",
        "empty the list",
        "empty it",
    ]
}