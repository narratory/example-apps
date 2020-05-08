# Narratory example apps

Example skills for the [Narratory tool](https://narratory.io/). Contributions welcome, send a PR!

# Contents

App      | Description  | Live link
--------------|----------------|-----------
Flightbooker  | A [Slot-filling](https://narratory.io/docs/slot-filling) interaction allowing you to book flights from city A to B using Google Assistants [Transactions](https://narratory.io/docs/transactions) API | [Live demo](https://flightbooker.examples.narratory.io/)
Grocery List  | Allowing you to create a grocery list using [List entities](https://narratory.io/docs/nlu). Comes with a backend using [API calls](https://narratory.io/docs/advanced-turns#dynamicbotturns---calling-apis-in-botturns) that provides daily specials ([Dynamic entities](https://narratory.io/docs/nlu#populating-entities-dynamically))| [Live demo](https://grocerylist.examples.narratory.io/)
Customer Service  | Helping users in a fictional one-size-fits-noone T-shirt e-commerce store with various problems related to payments and orders. The live demo uses a real-time translation and a human handover feature (the code for this is not yet in this repo) | [Live demo](http://demos.narratory.io/)
Corona guiden FAQ | Answering questions about the Corona crisis backed by a Google Sheets CMS | [Tutorial](https://narratory.io/docs/tutorial-faq-google-sheets)

# Running apps
0. Install Narratory with `npm install -g narratory`
1. Clone the repository, `git clone https://github.com/narratory/example-apps`.
2. Go into the folder of the app you want to test, for example `cd flightbooker`.
3. Run `npm install` to install dependencies.
4. Set up credentials (see [Narratory docs on setup](https://narratory.io/docs/setup))
5. Create your agent and start an interactive chat-prompt in the terminal with `narratory start`

# Documentation
For more info, see [the Narratory docs](https://narratory.io/).
