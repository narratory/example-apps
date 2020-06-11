> **Please see README.md in root directory for instructions of how to run the app.**

### What is this?

A multi-booking bot allowing you to book flights, car and hotel room in the same location, reusing set variables. 

> **Note** very limited training phrases / examples for now so stick to the script below

### How does it work?

It has a single BotTurn that loops "what can I do for you"/"what else can I do for you" in `src/narrative.ts`:

```typescript
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
```

Each fulfillment is then using the same variable names for the (destination) city and date allowing scripts like the below. One example of the car booking fulfillment: 

```typescript
export const fulfillCarBooking: BotTurn[] = [
    {
      label: "fulfillCar",
      cond: {
        toCity: false
      },
      say: "In which city?", // Asking for city if we haven't previously set one (checked by the condition above - i.e that toCity is set)  
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
      say: "At what date?", // Asking for date if it hasn't previously been set - i.e date is not set
      user: [{ intent: nlu.date, bot: "Alright, car at _date_original in _toCity" }]
    },
    {
      say: "A car in _toCity at _date_original sounds great", // Confirming the booking
      goto: "start" // And finally returning to the start
    }
  ]

```

### Example script

First booking a flight and then adding a car and hotel room: 

```text
Bot: What can I do for you?
>> I want to book a flight to paris from berlin
Bot: Great
Bot: At what date?
>> 3rd june
Bot: Alright, flighy at 3rd june
Bot: Okay, great. A flight from Berlin to Paris at 3rd june is now booked!
Bot: What can I do for you?
>> I want to book a hotel
Bot: Great
Bot: Okay, great. A room in Paris at 3rd june is now booked!
Bot: What can I do for you?
>> I want to book a car
Bot: Great
Bot: A car in Paris at 3rd june sounds great
Bot: What can I do for you?
```

First booking a car and then a hotel room: 

```text
Bot: What can I do for you?
>> I want to book a car in paris
Bot: Great
Bot: At what date?
>> 5th july
Bot: Alright, car at 5th july in Paris
Bot: A car in Paris at 5th july sounds great
Bot: What can I do for you?
>> I want to book a hotel
Bot: Great
Bot: Okay, great. A room in Paris at 5th july is now booked!
Bot: What can I do for you?
```

First booking a hotel and then a flight:

```text
Bot: What can I do for you?
>> I want to book a hotel in paris
Bot: Great
Bot: At what date?
>> 3rd may
Bot: Alright, on the 3rd may
Bot: Okay, great. A room in Paris at 3rd may is now booked!
Bot: What can I do for you?
>> I want to book a flight
Bot: Great
Bot: From which city?
>> berlin
Bot: Alright, flying from Berlin
Bot: Okay, great. A flight from Berlin to Paris at 3rd may is now booked!
Bot: What can I do for you?
```
