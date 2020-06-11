import { BotTurn, Intent, entities } from "narratory"
import * as nlu from "./nlu"
import { fulfillCarBooking, fulfillFlightBooking, fulfillHotelBooking } from "./fulfillment"

// Start botTurn, going to respective fullfillment turns depending on the type of booking. 
// After each fulfillment, the bot will return here since each fulfillment has a goto: "start" set

export const start: BotTurn = {
  label: "start",
  say: [
    { cond: { turnCount: 0 }, text: "What can I do for you?" },
    { text: "What else can I do for you?" }
  ],
  user: [
    {
      intent: nlu.bookFlight,
      bot: {
        say: "Great",
        goto: "fulfillFlight"
      }
    },
    {
      intent: nlu.bookCar,
      bot: {
        say: "Great",
        goto: "fulfillCar"
      }
    },
    {
      intent: nlu.bookHotel,
      bot: {
        say: "Great",
        goto: "fulfillHotel"
      }
    },
    {
      intent: nlu.nothing,
      bot: "Okay, have a great day!"
    }

  ]
}

export const narrative = [
  start,
  ...fulfillCarBooking,
  ...fulfillFlightBooking,
  ...fulfillHotelBooking
]
