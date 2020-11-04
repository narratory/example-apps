import { Intent, entities } from "narratory"
import { pizza, quantifiedMain, size } from "./entities.nlu"

export const yes: Intent = {
  examples: ["Yes", "Indeed", "Absolutely", "we have", "I think so"]
}

export const no: Intent = {
  examples: ["No", "I don't think so", "I have no idea", "I don't know"]
}

export const sizeIntent: Intent = {
  entities: {
    size
  },
  examples: ["it should be _size", "_size thanks", "_size", "_size please"]
}

export const pizzaIntent: Intent = {
  entities: {
    pizza
  },
  examples: [
    "I want a _pizza",
    "a _pizza",
    "_pizza",
    "_pizza please",
    "can I have a _pizza"
  ]
}

export const addMain: Intent = {
  entities: {
    orders: quantifiedMain
  },
  examples: [
    "I want _orders and _orders",
    "I want _orders",
    "I want _orders and _orders",
    "_orders and _orders please",
    "_orders please",
    "_orders",
    "give me a _orders and _orders",
  ]
}

export const removeMainIntent: Intent = {
  entities: {
    orders: quantifiedMain
  },
  examples: [
    "I don't want _orders and _orders",
    "I don't want _orders",
    "I don't want _orders and _orders",
    "remove _orders and _orders please",
    "remove _orders please",
    "remove _orders",
    "skip the _orders and _orders",
    "skip _orders"
  ]
}

export const changeSize: Intent = {
  entities: {
    pizza,
    fromSize: size,
    toSize: size,
    ordinal: entities.number
  },
  examples: [
    "the _pizza should be _toSize",
    "change the _pizza to _toSize",
    "change the size of _pizza to _toSize",
    "I want the _pizza in _toSize",
    "it should be _toSize",
    "change to _toSize",
    "change size to _toSize",
    "I want it in _toSize",
    "I want a different size",
    "I want to change size of _pizza",
    "change the _pizza size",
    "change the _ordinal _pizza size to _toSize",
    "change the _ordinal _fromSize to _toSize",
  ]
}

export const pizzaSelector: Intent = {
  entities: {
    pizza,
    size,
    ordinal: entities.number
  },
  examples: [
    "The _size one",
    "the _pizza",
    "the _size _pizza",
    "_pizza _size",
    "_piza",
    "_size",
    "_ordinal",
    "_ordinal _pizza",
    "_ordinal _size",
    "_ordinal _size _pizza"
  ]
}
