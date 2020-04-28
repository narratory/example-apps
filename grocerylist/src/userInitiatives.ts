import { UserTurn, EXIT } from "narratory"

const buyGroceries : UserTurn = {
    intent: ["I want to buy groceries", "I want to add groceries to my list", "talk to grocery list"],
    bot: "Grocery list at your service!"
}

const exitIntent: UserTurn = {
    intent: ["exit", "stop"],
    bot: {
        say: "Okay, bye bye!",
        goto: EXIT
    }
}

export default [buyGroceries, exitIntent]