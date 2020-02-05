import { Intent, Entity } from "narratory"

export const Yes: Intent = {
    examples: ["yeah", "yes", "of course", "absolutely"]
}

export const No: Intent = {
    examples: ["no", "never", "nope", "I don't think so"]
}

export const product : Entity = {
    name: "product",
    enums: [
        { name: "apple" },
        { name: "banana" },
        { name: "milk" },
        { name: "egg" },
        { name: "couscous" }
    ]
}

export const addProductsToList : Intent = {
    entities: {
        product
    },
    examples: [
        "I want _product and _product",
        "add _product and _product",
        "_product, _product and _product"
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
        "Take away _product"
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
        "what groceries do you have"
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

export const productsAsList = () => {
    return product.enums.map(it => it.name + (it.alts && it.alts.length > 0 ? it.alts.join(", ") : "")).join(", ")
}