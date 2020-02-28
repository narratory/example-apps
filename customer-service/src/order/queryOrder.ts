import * as nlu from "./nlu"
import { ANYTHING, BotTurn } from "narratory"
import { endSession, beyondDemo } from "../partials"

const queryProblem: BotTurn = {
  label: "QUERY_ORDER",
  say: "So, _problem. What is the problem with your _problem_original?",
  user: [
    {
      intent: nlu.wrongQuantity,
      bot: "You ordered the wrong amount of products? That happens"
    },
    {
      intent: nlu.notDelivered,
      bot: "You didn't receive the product? I'm sad to hear."
    },
    {
      intent: nlu.wrongColor,
      bot: "Oh, the wrong color you say? I also change my mind sometimes"
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: {
            turnCount: 0
          },
          say:
            "I can help if you either ordered the wrong quantity, the wrong color or if you haven't received your package",
          repair: true
        },
        {
          cond: {
            turnCount: 1
          },
          say: "Try saying that you ordered the wrong quantity",
          repair: true
        },
        endSession
      ]
    }
  ]
}

const queryOrderNumber: BotTurn = {
  say: ["For me to help you, I need your order number", "Can I please have your order number?"],
  user: [{ intent: ANYTHING, bot: beyondDemo }]
}

export const orderNarrative = [queryProblem, queryOrderNumber]
