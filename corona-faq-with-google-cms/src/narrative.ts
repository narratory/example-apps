import { BotTurn } from "narratory"
import * as nlu from "./nlu"

const greeting: BotTurn = {
    say: "Hi and welcome to CoronaGuiden"
}

const intro = {
    say: "I can answer questions about the Corona crisis and also give you the latest news."
}

const queryQuestions: BotTurn = {
  say: [
    {
      // If it is the first time we state this question
      cond: {
        turnCount: 0,
      },
      text: [
        "What can I do for you?",
        "Do you have a question for me?",
        "What do you wonder?",
        "What are you curious about?",
      ],
    },
    {
      // On subsequent questions
      text: [
        "Do you have any other question?",
        "What else do you wonder?",
        "Are you curious about anything else?",
      ]
    }
  ],
  user: [
    {
      intent: nlu.yes, // Because the user might just answer "yes", in which case we stay in this turn - i.e we "repair" the turn
      bot: {
        say: "What do you wonder?",
        repair: true
      }
    },
    {
      intent: nlu.no, // Moving on to the next turn in the narrative
      bot: {
        say: "Okay"
      }
    }
  ]
}

const goodbye = "Thanks for now. Reach out again if you have more questions! Bye!"

export default [greeting, intro, queryQuestions, goodbye]