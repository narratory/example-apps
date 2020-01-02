import { Intent, entities } from "narratory"

export const Yes: Intent = {
    examples: ["yeah", "yes", "of course", "absolutely"]
}

export const No: Intent = {
    examples: ["no", "never", "nope", "I don't think so"]
}

export const travel: Intent = {
    examples: [
        "book a flight",
        "book tickets to _toCity",
        "_toCity",
        "to _toCity",
        "to _toCity from _fromCity",
        "going to _toCity from _fromCity",
        "I want to book a flight",
        "I want to book tickets",
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
        "I wanna fly to _toCity from _fromCity"
    ],
    entities: {
        tickets: entities.numberInteger,
        fromCity: entities.geoCity,
        toCity: entities.geoCity
    }
}

export const peopleTravelling: Intent = {
    examples: ["_tickets", "_tickets people", "_tickets tickets", "we are _tickets"],
    entities: {
        tickets: entities.numberInteger
    }
}

export const travelFrom: Intent = {
    examples: ["I want to go from _fromCity", "I want to fly from _fromCity", "_fromCity", "from _fromCity"],
    entities: {
        fromCity: entities.geoCity,
    }
}

export const travelTo: Intent = {
    examples: ["I want to go to _toCity", "I want to fly to _toCity", "_toCity", "to _toCity"],
    entities: {
        toCity: entities.geoCity,
    }
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
        "how much is it to fly to _airport"
    ],
    entities: {
        city: entities.geoCity,
        country: entities.geoCountry,
        airport: entities.airport,
    }
}