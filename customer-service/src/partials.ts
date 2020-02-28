import { BotTurn, EXIT } from "narratory"

export const endSession = {
  say: "Sorry, I seem to have issues understanding you. Please try again later",
  goto: EXIT
}

export const beyondDemo: BotTurn = {
  say: [
    "Now, I would help you but it goes beyond the scope of this demo! ",
    "Thanks! Now, I would of course try to help you but it goes beyond the scope OF this demo!"
  ],
  set: {
      initial: false
  },
  goto: "OFFER_HELP"
}
