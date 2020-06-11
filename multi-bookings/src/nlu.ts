import { entities, Intent } from "narratory"

export const bookFlight: Intent = {
  entities: {
    toCity: entities.geoCity,
    fromCity: entities.geoCity,
    date: entities.date,
  },
  examples: [
    "I want to book a flight from _fromCity to _toCity at _date",
    "I want to book a flight from _fromCity",
    "I want to book a flight to _toCity",
    "I want to book a flight to _toCity at _date",
    "I want to book a flight at _date",
    "I want to book a flight",
  ],
  noEntityReset: true,
}

export const bookCar: Intent = {
  entities: {
    toCity: entities.geoCity,
    date: entities.date,
  },
  examples: [
    "I want to book a car in _toCity at _date",
    "I want to book a car in _toCity",
    "I want to book a car at _date",
    "i want to book a car",
  ],
  noEntityReset: true,
}

export const bookHotel: Intent = {
  entities: {
    toCity: entities.geoCity,
    date: entities.date,
  },
  examples: [
    "I want to book a hotel in _toCity at _date",
    "I want to book a hotel at _date",
    "I want to book a hotel in _toCity",
    "I want to book a hotel",
  ],
  noEntityReset: true,
}

export const city: Intent = {
  entities: {
    city: entities.geoCity,
  },
  examples: ["_city", "in _city", "to _city", "from _city"],
}

export const date: Intent = {
  entities: {
    date: entities.date,
  },
  examples: ["_date", "at _date", "on _date"],
}

export const nothing: Intent = {
  examples: [
    "nothing", "I'm done", "that is it", "that's fine", "goodbye"
  ]
}