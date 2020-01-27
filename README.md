# Narratory example apps

Example skills for the [Narratory tool](https://narratory.io/). Contributions welcome, send a PR!

# Contents

Skill         | Description                  | Live link | Concepts showcased                                   
--------------|------------------------------|-----------|-------------------------------------------
Flightbooker  | Allowing you to book flights | [flightbooker.examples.narratory.io](https://flightbooker.examples.narratory.io/) | [Slot-filling](https://narratory.io/docs/slot-filling) and [transactions](https://narratory.io/docs/transactions) | 

# Running apps
1. Clone the repository, `git clone https://github.com/narratory/example-apps`.
2. Go into the folder of the app you want to test, for example `cd flightbooker`.
3. Run `npm install` to install dependencies.
4. Set up credentials and fulfillment url (see [Narratory docs on setup](https://narratory.io/docs/setup))
    * Add your Google credentials and Narratory key to the `src/agent.ts` file
    * Add the Narratory fulfillment url to your Dialogflow agent
5. Create your agent and start an interactive chat-prompt in the terminal with `npm run start`

# Documentation
For more info, see [the Narratory docs](https://narratory.io/docs/first-agent).
