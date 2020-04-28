import { BotTurn, ANYTHING, EXIT } from "narratory"
import * as nlu from "./nlu"
import { ASK_TICKETS } from "./util"

const greeting = ["Hi there", "Hello", "Hi"]

// Booking turn, allowing users to start of with a booking by saying for example "I want to fly to Paris from Stockholm"
// or to enter a slot-filling dialog if they simply reply "Yes".
const askBooking: BotTurn = {
  say: ["Do you want to book a flight?", "How about booking a flight?"],
  user: [
    { intent: nlu.travel, bot: ["Excellent", "Sounds great"] }, // This intent (defined in nlu.ts) does most of the magic here
    { intent: nlu.Yes, bot: "Alright" },
    {
      intent: nlu.No,
      bot: {
        say: "Okay, no problem! Come back if you change your mind!",
        goto: EXIT // Exists the conversation
      }
    },
    {
      intent: ANYTHING,
      bot: {
        say: "You can for example say that you want to fly to New York from Stockholm",
        repair: true
      }
    }
  ]
}

// Slot filling turns follow, filling in the missing slots. See https://narratory.io/docs/slot-filling
const askTickets: BotTurn = {
  label: ASK_TICKETS,
  cond: { tickets: null },
  say: "How many people are travelling?",
  user: [{ intent: nlu.peopleTravelling, bot: "How nice, _tickets people." }]
}

const askTo: BotTurn = {
  cond: { toCity: null },
  say: "Where do you wanna go to?",
  user: [
    {
      intent: nlu.travelTo,
      bot: {
        say: "To _city, got it",
        set: { toCity: "_city" }
      }
    },
    {
      intent: nlu.city,
      bot: {
        say: `_city, understood`,
        set: { toCity: "_city" }
      }
    },
  ]
}

const askFrom: BotTurn = {
  cond: { fromCity: null },
  say: "Where do you wanna go from?",
  user: [
    {
      intent: nlu.travelFrom,
      bot: {
        say: `From _city, got it`,
        set: { fromCity: "_city" }
      }
    },
    {
      intent: nlu.city,
      bot: {
        say: `_city, understood`,
        set: { fromCity: "_city" }
      }
    },
  ]
}

// Confirmation turn, allowing the user to change any of the slots. Once happy, a booking is
// made through the Google Assistant Transactions API
const confirm: BotTurn = {
  say: "A flight from _fromCity to _toCity for _tickets people sounds lovely. Does that seem right?",
  user: [
    {
      intent: nlu.travelFrom,
      bot: {
        say: "Ok, sorry. _city it is. Otherwise we are good?",
        set: { fromCity: "_city" },
        repair: true
      }
    },
    {
      intent: nlu.travelTo,
      bot: {
        say: "Ok, sorry. Going to _city. Otherwise we are good?",
        set: { toCity: "_city" },
        repair: true
      }
    },
    {
      intent: nlu.peopleTravelling,
      bot: {
        say: "Alright. _tickets tickets. Does it sound good otherwise?",
        repair: true
      }
    },
    {
      intent: ["No", "It is not good", "wrong"],
      bot: {
        say: "Okay. What do you want to correct?",
        repair: true
      }
    },
    {
      intent: ["It is ok", "OK", "great", "yes"],
      bot: {
        // Booking state. See https://narratory.io/docs/transactions
        orderType: "BOOK",
        name: "A flight to _toCity",
        description: "_tickets tickets to _toCity from _fromCity",
        confirmationText: "Flight booked",
        onConfirmed: {
          say: "Awesome, order sent",
          set: {
            booked: true
          }
          // // Here you would normally have a webhook calling your order API
          // url: "my_url",
          // params: ["toCity", "fromCity", "tickets"],
        },
        onCancelled: {
          say: "Okay. Order cancelled"
        }
      }
    },
    {
      intent: ["Abort"],
      bot: {
        say: "Okay, aborting"
      }
    }
  ]
}

const anotherBooking: BotTurn = {
  say: ["Do you want to do another booking?", "Do you want to book another flight?"],
  set: {
    // Resetting all variables
    toCity: null,
    fromCity: null,
    tickets: null
  },
  user: [
    {
      intent: nlu.travel,
      bot: {
        say: ["Excellent", "Sounds great"],
        goto: ASK_TICKETS
      }
    },
    {
      intent: nlu.Yes,
      bot: {
        say: "Alright",
        goto: ASK_TICKETS
      }
    },
    {
      intent: nlu.No,
      bot: "Okay, no problem!"
    }
  ]
}

const happyFlight: BotTurn = {
  cond: { booked: true },
  say: "I hope you have a great flight!"
}

const bye = ["Hope to see you again. Bye!"]

// The main narrative, i.e the flow through the dialog is defined here
export const narrative = [greeting, askBooking, askTickets, askTo, askFrom, confirm, anotherBooking, happyFlight, bye]
