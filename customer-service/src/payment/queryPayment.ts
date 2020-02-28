import * as nlu from "./nlu"
import { ANYTHING, BotTurn } from "narratory"
import { endSession, beyondDemo } from "../partials"

const queryProblem: BotTurn = {
  label: "QUERY_PAYMENT",
  say: "So, _problem. What is the issue with your _problem_original?",
  user: [
    {
      intent: nlu.moreTime,
      bot: {
        say: "Oh, I can probably extend it. Could I have your invoice number please?",
        user: [{ intent: ANYTHING, bot: beyondDemo }]
      }
    },
    {
      intent: nlu.wrongAmount,
      bot: {
        say: "Oh, you don't say? Let me look at it. Could I have your order number please?",
        user: [{ intent: ANYTHING, bot: beyondDemo }]
      }
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: {
            turnCount: 0
          },
          say: "I can help if you either if you need to extend your payment or if it charged the wrong amount",
          repair: true
        },
        {
          cond: {
            turnCount: 1
          },
          say: "Try saying that it charged the wrong amount",
          repair: true
        },
        endSession
      ]
    }
  ]
}

const queryOrderNumber: BotTurn = {
  say: [
    "Do you have your invoice number for me? For me to help you, I need your order number",
    "Can I please have your order number?"
  ],
  user: [{ intent: ANYTHING, bot: beyondDemo }]
}

export const paymentNarrative = [queryProblem, queryOrderNumber]
