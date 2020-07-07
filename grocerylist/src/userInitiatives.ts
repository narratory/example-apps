import { UserTurn, EXIT } from "narratory"

const buyGroceries: UserTurn = {
  intent: ["I want to buy groceries", "I want to add groceries to my list", "talk to grocery list"],
  bot: "Grocery list at your service!",
}

const exitIntent: UserTurn = {
  intent: ["exit", "stop"],
  bot: {
    say: "Okay, bye bye!",
    goto: EXIT,
  },
}

const greeting: UserTurn = {
  intent: ["hello", "hi", "hey", "what's up", "hej", "hallå", "hiya"],
  bot: ["Hi there!", "Hello!", "Hi!"],
}

const help: UserTurn = {
  intent: [
    "Can you help?",
    "What can I ask?",
    "What do you do?",
    "What can you help with?",
    "What can this bot do?",
    "I don't know",
    "What to ask?",
    "Can you tell me what I can ask",
    "What are you able to do",
  ],
  bot: {
    say: "I can help you create a grocery list!",
    bot: {
      say: "Just tell me what you want to add to your list, and I will add it for you.",
      goto: "MODIFY_LIST",
    },
  },
}

export default [buyGroceries, exitIntent, greeting, help]
