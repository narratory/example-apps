import { UserTurn, EXIT } from "narratory"
import * as intents from "./nlu"
import { ASK_TICKETS } from "./util"

/*
    User-driven initiatives
*/

// Intent to be used as an implicid invocation phrase
const bookFlightIntent: UserTurn = {
  intent: intents.travel,
  bot: {
    say: ["Absolutely", "Of course"],
    goto: ASK_TICKETS
  }
}

const queryFunction: UserTurn = {
  intent: ["What can I do", "what can you help with", "what can you do"],
  bot: "I can help you book flights!"
}

const exitIntent: UserTurn = {
  intent: ["exit", "stop"],
  bot: {
    say: "Okay, bye bye!",
    goto: EXIT
  }
}

const queryCost: UserTurn = {
  intent: intents.costQuery,
  bot: `I don't know yet unfortunately! In the future, I might be connected to an API to be able to help you with this`
}

const queryWeather: UserTurn = {
  intent: intents.weatherQuery,
  bot: [{ 
    cond: { weatherCity: true }, 
    say: `The weather in _weatherCity is surely spectacular, I'm sure.` 
  }, {
    cond: { city: true },
    say: [`The weather in _city is sunny right now`, `The weather in _city is rainy right now`]
  }, {
    cond: { toCity: true },
    say: "Your destination _toCity has remarkable weather, good choice!"
  }, {
    cond: { fromCity: true },
    say: "It's raining in _fromCity so it's probably a good idea to fly off"
  }, {
    say: "Sorry, you need to be more specific as to where you mean"
  }
]
}

const greeting: UserTurn = {
  intent: intents.greeting,
  bot: ["Hi there!", "Hello!", "Hi!"]
}

const help: UserTurn = {
  intent: intents.help,
bot: {
  say: "If you need help to book tickets for an upcoming trip, I'm here to help.",
  bot: {
    say: "Let's start. Tell me where would you like to go?",
  repair: true,
}
}
}

const askQuestion: UserTurn = {
  intent: intents.askQuestion,
  bot: {
    say: "I'm a slot-filling bot, which means that I can help you book tickets for an upcoming trip.",
    bot: {
      say: "Let's start. Tell me where would you like to go?",
      repair: true,
    }
  }
}

export const userInitiatives = [bookFlightIntent, queryFunction, queryCost, queryWeather, exitIntent, greeting, help, askQuestion]
