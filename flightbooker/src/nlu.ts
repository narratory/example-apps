import { Intent, entities } from "narratory"

export const Yes: Intent = {
  examples: ["yeah", "yes", "of course", "absolutely", "yep", "it does", "yea", "sure", "yup", "great"],
}

export const No: Intent = {
  examples: ["no", "never", "nope", "I don't think so"],
}

export const travel: Intent = {
  examples: [
    "I want to book a flight",
    "I want to book tickets",
    "_toCity",
    "to _toCity",
    "to _toCity from _fromCity",
    "to _toCity from _fromCity for _tickets",
    "book a flight",
    "book tickets to _toCity",
    "book _tickets tickets to _toCity",
    "book tickets to _toCity from _fromCity",
    "book _tickets tickets to _toCity from _fromCity",
    "going to _toCity from _fromCity",
    "going from _fromCity to _toCity",
    "_tickets people going from _fromCity to _toCity",
    "I want to book _tickets tickets to _toCity",
    "I want to book _tickets tickets from _fromCity to _toCity",
    "I want to fly from _fromCity to _toCity for _tickets people",
    "I want to fly from _fromCity to _toCity",
    "I want to fly to _toCity from _fromCity for _tickets people",
    "I want to fly to _toCity from _fromCity",
    "I want to fly to _toCity",
    "I want to fly from _fromCity",
    "I wanna fly to _toCity",
    "I wanna fly from _fromCity to _toCity",
    "I wanna fly to _toCity from _fromCity",
    "fly to _toCity from _fromCity",
    "fly from _fromCity to _toCity",
    "I wanna go to _toCity",
    "I want _tickets tickets to _toCity"
  ],
  entities: {
    tickets: entities.numberInteger,
    fromCity: entities.geoCity,
    toCity: entities.geoCity,
  },
}

export const peopleTravelling: Intent = {
  examples: ["_tickets", "_tickets people", "_tickets tickets", "we are _tickets", "we aer __tickets", "no we are _tickets", "no _tickets"],
  entities: {
    tickets: entities.numberInteger,
  },
}

export const travelFrom: Intent = {
  examples: [
    "I want to go from _city",
    "I want to fly from _city",
    "from _city",
    "no from _city",
    "no, going from _city",
    "we are flying to _city"
  ],
  entities: {
    city: entities.geoCity,
  },
}

export const city: Intent = {
  examples: ["_city"],
  entities: {
    city: entities.geoCity,
  },
}

export const travelTo: Intent = {
  examples: [
    "I want to go to _city",
    "I want to fly to _city",
    "_city",
    "to _city",
    "no to _city",
    "no, going to _city",
  ],
  entities: {
    city: entities.geoCity,
  },
}

export const costQuery: Intent = {
  examples: [
    "what does it cost",
    "what is the price",
    "what does the flight cost",
    "what does it cost to fly to _country",
    "what does it cost to fly to _city",
    "what does it cost to fly to _airport",
    "how much is it to fly to _country",
    "how much is it to fly to _city",
    "how much is it to fly to _airport",
  ],
  entities: {
    city: entities.geoCity,
    country: entities.geoCountry,
    airport: entities.airport,
  },
}

export const weatherQuery: Intent = {
  examples: ["how is the weather there?", "how is the weather in _weatherCity", "what is the weather in _weatherCity"],
  entities: {
    weatherCity: entities.geoCity,
  },
}

export const greeting: Intent = {
  examples: ["hello", "hi", "hey", "what's up", "hej", "hallå", "hiya", "yello"]
}

export const help: Intent = {
  examples: ["I don't know", 
  "idk", 
  "you tell me", 
  "About that I can ask", 
  "What can I ask", 
  "dunno", 
  "tell me what you can do",
  "can you help",
  "what can you do",
  "what are you able to help with",
  "how do i book a flight",
],
}

export const askQuestion: Intent = {
  examples: [
    "can i ask you something",
    "can i ask a question",
    "i have a question", 
    "i am wondering something",
    "can you tell me something",
  ]
}