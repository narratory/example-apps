import { BotTurn, Intent, entities } from "narratory"
import * as nlu from "./nlu"

// Fulfillment for car, hotel and flights

export const fulfillCarBooking: BotTurn[] = [
    {
      label: "fulfillCar",
      cond: {
        toCity: false
      },
      say: "In which city?",
      user: [
        {
          intent: nlu.city,
          bot: {
            say: "Alright, car at _date_original in _toCity",
            set: {
              toCity: "_city"
            }
          }
        }
      ]
    },
    {
      cond: {
        date: false
      },
      say: "At what date?",
      user: [{ intent: nlu.date, bot: "Alright, car at _date_original in _toCity" }]
    },
    {
      say: "A car in _toCity at _date_original sounds great",
      goto: "start"
    }
  ]
  
  export const fulfillHotelBooking: BotTurn[] = [
    {
      label: "fulfillHotel",
      cond: {
        toCity: false
      },
      say: "In which city?",
      user: [
        {
          intent: nlu.city,
          bot: {
            say: "Alright, a room at in _city",
            set: {
              toCity: "_city"
            }
          }
        }
      ]
    },
    {
      cond: {
        date: false
      },
      say: "At what date?",
      user: [{ intent: nlu.date, bot: "Alright, on the _date_original" }]
    },
    {
      say: "Okay, great. A room in _toCity at _date_original is now booked!",
      goto: "start"
    }
  ]
  
  export const fulfillFlightBooking: BotTurn[] = [
    {
      label: "fulfillFlight",
      cond: {
        toCity: false
      },
      say: "To which city?",
      user: [
        {
          intent: nlu.city,
          bot: {
            say: "Alright, to _toCity",
            set: {
              toCity: "_city"
            }
          }
        }
      ]
    },
    {
      cond: {
        fromCity: false
      },
      say: "From which city?",
      user: [
        {
          intent: nlu.city,
          bot: {
            say: "Alright, flying from _city",
            set: {
              fromCity: "_city"
            }
          }
        }
      ]
    },
    {
      cond: {
        date: false
      },
      say: "At what date?",
      user: [{ intent: nlu.date, bot: "Alright, flighy at _date_original" }]
    },
    {
      say:
        "Okay, great. A flight from _fromCity to _toCity at _date_original is now booked!",
      goto: "start"
    }
  ]