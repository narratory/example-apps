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