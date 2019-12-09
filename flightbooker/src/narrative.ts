import { BotTurn, Intent, ANYTHING, EXIT } from "narratory"
import * as intents from "./nlu"
import user from "./user"

const greeting = ["Hi there", "Hello", "Hi"]

const intro: BotTurn = {
    say: "Do you want to book a flight?", answers: [
        { intent: intents.Yes, followup: "Alright" },
        { intent: intents.No, followup: {
            say: "Okay, no problem! Come back if you change your mind!",
            goto: EXIT
        }},
        {
            intent: intents.travel, followup: {
                say: ["Excellent", "Sounds great"]
            }
        },
        { intent: ["What can I do", "what can you help with", "what can you do"], followup: {
            say: "I can help you book a flight",
            repair: true
        }},
        { intent: ANYTHING, followup: {
            say: "You can for example say that you want to fly to New York from Stockholm",
            repair: true
        }}
    ]
}

export const ASK_TICKETS = "askTickets"

const askTickets: BotTurn = {
    label: ASK_TICKETS,
    cond: { "tickets": null },
    say: "How many people are travelling?", answers: [
        { intent: intents.peopleTravelling, followup: "How nice, _tickets people." }
    ]
}

const askTo: BotTurn = {
    cond: { "toCity": null },
    say: "Where do you wanna go to?", answers: [
        { intent: intents.travelTo, followup: "To _toCity, got it" }
    ]
}

const askFrom: BotTurn = {
    cond: { "fromCity": null },
    say: "Where do you wanna go from?", answers: [
        { intent: intents.travelFrom, followup: `From ${user.fromCity}, got it` }
    ]
}

const confirm: BotTurn = {
    say: "A flight from _fromCity to _toCity for _tickets people sounds lovely. Does that seem right?", answers: [
        { intent: intents.travelFrom, followup: {
            say: "Ok, sorry. _fromCity it is. Otherwise we are good?",
            repair: true
        }},
        { intent: intents.travelTo, followup: {
            say: "Ok, sorry. Going to _toCity. Otherwise we are good?",
            repair: true
        }},
        { intent: intents.peopleTravelling, followup: {
            say: "Alright. _tickets tickets. Does it sound good otherwise?",
            repair: true
        }},
        { intent: ["No", "It is not good", "wrong"], followup: {
            say: "Okay. What do you want to correct?",
            repair: true
        }},
        {
            intent: ["It is ok", "OK", "great", "yes"], followup: [{
                cond: { toCity: "Paris" },
                say: "are you really sure? _toCity is a dodgy place y'know",
                answers: [
                    { intent: [...intents.Yes.examples, "shut up", "I am sure"], followup: ["ok, I warned you", "remember I warned you"] },
                    {
                        intent: [...intents.No.examples, "You are right"], followup: {
                            say: "That's what I thought. But, let's move on anyway.",
                        }
                    }
                ]
            }, {
                say: "great!"
            }]
        },
        {
            intent: ["Abort"], followup: {
                say: "Okay, aborting",
            }
        }
    ]
}

const booking: BotTurn = {
    cond: { fromCity: true, toCity: true, tickets: true },
    say: "I got all I need. Now processing a booking",
    // A booking would be done here with an API-call
    set: {
        booked: true
    }
}

const anotherBooking: BotTurn = {
    say: "Do you want to do another booking?",
    answers: [
        {
            intent: intents.Yes, followup: {
                say: "okay. Where to next?",
                set: {
                    toCity: null,
                    fromCity: null,
                    tickets: null,
                    booked: false
                },
                answers: [
                    {
                        intent: intents.travel, followup: {
                            say: ["Excellent", "Sounds great"],
                            goto: ASK_TICKETS
                        }
                    }
                ]
            }
        },
        { intent: intents.No, followup: "Alright" }
    ]
}

const happyFlight: BotTurn = {
    cond: { booked: true },
    say: "I hope you have a great flight!"
}

const bye = ["Hope to see you again. Bye!"]

export default [greeting, intro, askTickets, askTo, askFrom, confirm, booking, anotherBooking, happyFlight, bye]