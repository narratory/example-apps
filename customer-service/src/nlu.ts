import { Entity, Intent, entities } from "narratory"

export const Yes : Intent = {
  examples: ["Yes", "yep", "absolutely", "correct", "that is right", "right", "okay"]
}

export const No : Intent = {
  examples: ["no", "nope", "wrong", "not right", "nothing"]
}

export const problemArea : Entity = {
  name: "ProblemArea",
  enums: [
    { name: "order", alts: ["purchase", "item I bought", "purchased item", "ordered item"]},
    { name: "payment", alts: ["invoice", "credit card"]},
  ]
}

export const queryProblem : Intent = {
  entities: {
    problem: problemArea,
    identifier: entities.numberSequence
  },
  examples: [
    "I have a question about my _problem",
    "I have a problem with my _problem",
    "I have problems with my _problem",
    "I have problems with my _problem with id _identifier",
    "questions about _problem",
    "I wanna talk about _problem",
    "my _problem has a problem",
    "my _problem has issues",
    "I have issues with my _problem",
    "issues with my _problem",
    "issue with my _problem",
    "with my _problem",
    "_problem",
    "problem with my _problem"
  ]
}

export const queryHumanHandover : Intent = {
  examples: [
    "I wanna talk to a human",
    "I need to talk to a human",
    "stop",
    "I'm stuck",
    "help",
    "this isn't working",
    "let me talk to a live person",
    "let me talk to a representative",
    "I wanna talk to a person",
    "speak with real person",
    "talk to operator",
    "give me a person",
    "i want to talk to someone",
    "how to talk with the employee"
  ]
}

export const greeting: Intent = {
  examples: ["hello", "hi", "hey", "what's up", "hej", "hallå", "hiya"]
}

export const product: Intent = {
  examples: ["product", "goods", "brand", "merchandise", "commodity", "things", "manufacturing", "creations"]
}

export const idk: Intent = {
  examples: ["I don't know", "idk", "you tell me", "About that I can ask", "What can I ask", " I can ask about number of requested", "dunno"]
}