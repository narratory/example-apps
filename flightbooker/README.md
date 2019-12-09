# Starting kit for building chatbots and voice-apps with Narratory

Dependencies:
* Newer versions of node.js & npm
* Typescript
* Google Cloud account with billing activated and a service-account with IAM role "Dialogflow API Admin"

Recommended editor: 
* Virtual Studio Code

Getting started:
* Fill in your Google credentials in google_credentials.json
* Create and start an interactive chat in the command-line with your bot with `npm run start`

> **Important note**: Do remember to run the `npm run watch` command. It's very easy to forget this, resulting in that your new edits will not be updated! Very frustrating indeed ;-)

Other commands:
* `npm run watch` to run the Typescript compiler in a watch mode, so that any new content you write gets picked up automatically for following update or bootstrap commands.
* `npm run update` to update the bot with new content
* `npm run chat` to start the interactive chat in the command-line window

