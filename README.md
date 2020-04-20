# Narratory example apps

Example skills for the [Narratory tool](https://narratory.io/). Contributions welcome, send a PR!

# Contents

Skill         | Description    | Live link | Concepts showcased                                   
--------------|----------------|-----------|-------------------------------------------
Flightbooker  | Allowing you to book flights from city A to B using Google Assistants Transactions API | [flightbooker.examples.narratory.io](https://flightbooker.examples.narratory.io/) | [Slot-filling](https://narratory.io/docs/slot-filling) and [transactions](https://narratory.io/docs/transactions) | 
Grocery List  | Allowing you to create a grocery list. Comes with a backend that provides daily specials | [grocerylist.examples.narratory.io](https://grocerylist.examples.narratory.io/) | [List entities](https://narratory.io/docs/nlu), [Custom variables](https://narratory.io/docs/logic#custom-variables), [Dynamic Botturns / API calls](https://narratory.io/docs/advanced-turns#dynamicbotturns---calling-apis-in-botturns), [Dynamic entities](https://narratory.io/docs/nlu#populating-entities-dynamically) | 
Customer Service  | Helping users in a fictional one-size-fits-noone tshirt e-commerce store with various problems related to payments and orders | [customerservice.examples.narratory.io](https://customerservice.examples.narratory.io/) | Multiple domains and branching between them

# Running apps
1. Clone the repository, `git clone https://github.com/narratory/example-apps`.
2. Go into the folder of the app you want to test, for example `cd flightbooker`.
3. Run `npm install` to install dependencies.
4. Set up credentials and fulfillment url (see [Narratory docs on setup](https://narratory.io/docs/setup))
5. Create your agent and start an interactive chat-prompt in the terminal with `npm run start`

# Documentation
For more info, see [the Narratory docs](https://narratory.io/).
