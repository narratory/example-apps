import { Intent, entities, Entity } from "narratory"

export const Yes: Intent = {
    examples: ["yes", "yeah", "yeap", "yep", "yeh", "yes, please", "of course", "absolutely", "exactly", "right", "correct"]
}

export const No: Intent = {
    examples: ["no", "never", "nope", "I don't think so", "not now", "not really"]
}

export const wishVerbExample: Entity = {
name: "wishVerbExample",
enums: [
  { name: "want", alts: ["want to", "wanna", "wanna to"]},
  { name: "wish", alts: ["wish to"]},
  { name: "would like", alts: ["would like to", "'d like", "'d like to"]},
  { name: "need", alts: ["need to", "have to"]},
  { name: "help", alts: ["help me", "help me to", "Can you help", "Can you help me", "Can you help us", "Can you help to", "Can you help me to", "Can you help us to", 
                         "Could you help", "Could you help me", "Could you help us", "Could you help to", "Could you help me to", "Could you help us to"]}
]
}

export const goVerbExample: Entity = {
  name: "goVerbExample",
  enums: [
    { name: "go", alts: ["going"]}, 
    { name: "travel", alts: ["travelling"]},
    { name: "fly", alts: ["have a flght", "flying"]},
    { name: "move", alts: ["moving"]},
    { name: "come", alts: ["arrive", "get", "coming", "arriving"]},
  ]
  }

export const getVerbExample: Entity = {
  name: "getVerbExample",
  enums: [
    { name: "get tickets", alts: ["book", "buy", "purchase"]}, 
    { name: "check", alts: ["find", "see", "looking for", "searching for", "show me"]},  
  ]
  }

export const doerExample: Entity = {
  name: "doerExample",
  enums: [
    { name: "I", alts: ["me"]},
    { name: "we", alts: ["I and", "I with", "and I", "me and", "and me", "us"]},
    { name: "they", alts: ["my friend", "my friends", "my family", "my colleague", "my colleagues", "them", "people"]},
    { name: "somebody", alts: ["he", "a man", "one man", "him", "she", "a woman", "one woman", "her"]},  
  ]
  }

export const travel: Intent = {
    examples: [
        "_toCity", "_toCity via _viaCity", 
        "_toCity for _tickets", "_toCity for _tickets _doer", "_toCity for _doer", "_toCity via _viaCity for _tickets _doer",
        "to _toCity", "to _toCity via _viaCity",
        "to _toCity from _fromCity", "to _toCity via _viaCity from _fromCity",
        "to _toCity from _fromCity for _tickets", "_toCity from_fromCity for _tickets _doer", "to _toCity from _fromCity via _viaCity for _tickets ", "to _toCity from _fromCity via _viaCity for _tickets _doer",
        
        "_fromCity _toCity", "_fromCity _toCity _tickets", "_fromCity _toCity _tickets _doer",
        "_fromCity _toCity via _viaCity", "_fromCity _toCity via _viaCity _tickets", "_fromCity _toCity via _viaCity _tickets _doer",
        "_fromCity to _toCity", "_fromCity to _toCity via _viaCity", "_fromCity to _toCity via _viaCity _tickets", "_fromCity to _toCity via _viaCity for _tickets _doer",
        "from _fromCity to _toCity", "from _fromCity to _toCity via _viaCity", "from _fromCity to _toCity via _viaCity _tickets", "from _fromCity to _toCity via _viaCity for _tickets _doer", "from _fromCity to _toCity via _viaCity _tickets _doer",
        
        "_getVerb a flight",
        "_getVerb tickets",
        "_getVerb tickets to _toCity", "_getVerb tickets to _toCity via _viaCity",
        "_getVerb _tickets tickets to _toCity", "_getVerb _tickets tickets to _toCity via _viaCity",
        "_getVerb tickets to _toCity from _fromCity", "_getVerb tickets to _toCity from _fromCity via _viaCity",
        "_getVerb _tickets tickets to _toCity from _fromCity", "_getVerb _tickets tickets to _toCity from _fromCity via _viaCity",
        "_getVerb tickets from _fromCity to _toCity", "_getVerb tickets from _fromCity to _toCity via _viaCity",
        "_getVerb _tickets tickets from _fromCity to _toCity", "_getVerb _tickets tickets from _fromCity to _toCity via _viaCity",
        "_getVerb tickets from _fromCity to _toCity for _tickets", "_getVerb tickets from _fromCity to _toCity via _viaCity for _tickets",
        "_getVerb tickets from _fromCity to _toCity for _tickets _doer", "_getVerb tickets from _fromCity to _toCity via _viaCity for _tickets _doer",
        
        "_wishVerb _getVerb a flight",
        "_wishVerb _getVerb tickets",
        "_wishVerb _getVerb tickets to _toCity", "_wishVerb _getVerb tickets to _toCity via _viaCity",
        "_wishVerb _getVerb _tickets tickets to _toCity", "_wishVerb _getVerb _tickets tickets to _toCity via _viaCity",
        "_wishVerb _getVerb tickets to _toCity from _fromCity", "_wishVerb _getVerb tickets to _toCity from _fromCity via _viaCity",
        "_wishVerb _getVerb _tickets tickets to _toCity from _fromCity", "_wishVerb _getVerb _tickets tickets to _toCity from _fromCity via _viaCity",
        "_wishVerb _getVerb tickets from _fromCity to _toCity", "_wishVerb _getVerb tickets from _fromCity to _toCity via _viaCity",
        "_wishVerb _getVerb _tickets tickets from _fromCity to _toCity", "_wishVerb _getVerb _tickets tickets from _fromCity to _toCity via _viaCity",
        "_wishVerb _getVerb tickets from _fromCity to _toCity for _tickets", "_wishVerb _getVerb tickets from _fromCity to _toCity via _viaCity for _tickets",
        "_wishVerb _getVerb tickets from _fromCity to _toCity for _tickets _doer", "_wishVerb _getVerb tickets from _fromCity to _toCity via _viaCity for _tickets _doer",
        
        "_doer _wishVerb _getVerb a flight",
        "_doer _wishVerb _getVerb tickets",
        "_doer _wishVerb _getVerb tickets to _toCity", "_doer _wishVerb _getVerb tickets to _toCity via _viaCity",
        "_doer _wishVerb _getVerb _tickets tickets to _toCity", "_doer _wishVerb _getVerb _tickets tickets to _toCity via _viaCity",
        "_doer _wishVerb _getVerb tickets to _toCity from _fromCity", "_doer _wishVerb _getVerb tickets to _toCity from _fromCity via _viaCity",
        "_doer _wishVerb _getVerb _tickets tickets to _toCity from _fromCity", "_doer _wishVerb _getVerb _tickets tickets to _toCity from _fromCity via _viaCity",
        "_doer _wishVerb _getVerb tickets from _fromCity to _toCity", "_doer _wishVerb _getVerb tickets from _fromCity to _toCity via _viaCity",
        "_doer _wishVerb _getVerb _tickets tickets from _fromCity to _toCity", "_doer _wishVerb _getVerb _tickets tickets from _fromCity to _toCity via _viaCity",
        "_doer _wishVerb _getVerb tickets from _fromCity to _toCity for _tickets people", "_wishVerb _getVerb tickets from _fromCity to _toCity via _viaCity for _tickets people",
        
        "_goVerb from _fromCity", "_goVerb from _fromCity via _viaCity",
        "_goVerb to _toCity", "_goVerb to _toCity via _viaCity",
        "_goVerb from _fromCity to _toCity", "_goVerb from _fromCity to _toCity via _viaCity",
        "_goVerb to _toCity from _fromCity", "_goVerb to _toCity from _fromCity via _viaCity",
        "_goVerb from _fromCity to _toCity for _tickets", "_goVerb from _fromCity to _toCity via _viaCity for _tickets",
        "_goVerb from _fromCity to _toCity via _viaCity for _tickets people",
        "_goVerb to _toCity from _fromCity for _tickets", "_goVerb to _toCity from _fromCity via _viaCity for _tickets",
        "_goVerb to _toCity from _fromCity via _viaCity for _tickets people",
        
        "_wishVerb _goVerb from _fromCity", "_wishVerb _goVerb from _fromCity via _viaCity",
        "_wishVerb _goVerb to _toCity", "_wishVerb _goVerb to _toCity via _viaCity",
        "_wishVerb _goVerb from _fromCity to _toCity", "_wishVerb _goVerb from _fromCity to _toCity via _viaCity",
        "_wishVerb _goVerb to _toCity from _fromCity", "_wishVerb _goVerb to _toCity from _fromCity via _viaCity",
        "_wishVerb _goVerb from _fromCity to _toCity for _tickets", "_wishVerb _goVerb from _fromCity to _toCity via _viaCity for _tickets",
        "_wishVerb _goVerb from _fromCity to _toCity for _tickets _doer", "_wishVerb _goVerb from _fromCity to _toCity via _viaCity for _tickets _doer",
        "_wishVerb _goVerb to _toCityfrom _fromCity for _tickets", "_wishVerb _goVerb to _toCityfrom _fromCity via _viaCity for _tickets",
        "_wishVerb _goVerb to _toCityfrom _fromCity for _tickets _doer", "_wishVerb _goVerb to _toCityfrom _fromCity via _viaCity for _tickets _doer",
        
        "_doer _wishVerb _goVerb from _fromCity", "_doer _wishVerb _goVerb from _fromCity via _viaCity",
        "_doer _wishVerb _goVerb to _toCity", "_doer _wishVerb _goVerb to _toCity via _viaCity",
        "_doer _wishVerb _goVerb from _fromCity to _toCity", "_doer _wishVerb _goVerb from _fromCity to _toCity via _viaCity",
        "_doer _wishVerb _goVerb to _toCity from _fromCity", "_doer _wishVerb _goVerb to _toCity from _fromCity via _viaCity",
        "_doer _wishVerb _goVerb from _fromCity to _toCity for _tickets", "_doer _wishVerb _goVerb from _fromCity to _toCity via _viaCity for _tickets",
        "_doer _wishVerb _goVerb from _fromCity to _toCity via _viaCity for _tickets people",
        "_doer _wishVerb _goVerb to _toCity from _fromCity for _tickets", "_doer _wishVerb _goVerb to _toCity from _fromCity via _viaCity for _tickets",
        "_doer _wishVerb _goVerb to _toCity from _fromCity via _viaCity for _tickets people",
        
        "_tickets tickets from _fromCity to _toCity", "_tickets tickets from _fromCity to _toCity via _viaCity",
        "_tickets tickets to _toCity from _fromCity", "_tickets tickets to _toCity from _fromCity via _viaCity",
        "_tickets _doer _goVerb from _fromCity to _toCity", "_tickets _doer _goVerb from _fromCity to _toCity via _viaCity",
        "_tickets _doer _goVerb to _toCity from _fromCity", "_tickets _doer _goVerb to _toCity from _fromCity via _viaCity",
        "_tickets _doer _wishVerb _goVerb from _fromCity to _toCity", "_tickets _doer _wishVerb _goVerb from _fromCity to _toCity via _viaCity",
        "_tickets _doer _wishVerb _goVerb to _toCity from _fromCity ", "_tickets _doer _wishVerb _goVerb to _toCity from _fromCity via _viaCity"
    ],
    entities: {
        tickets: entities.numberInteger,
        fromCity: entities.geoCity,
        toCity: entities.geoCity,
        viaCity: entities.geoCity,
        wishVerb: wishVerbExample,
        goVerb: goVerbExample,
        doer: doerExample,
        getVerb: getVerbExample
    }
}

export const peopleTravelling: Intent = {
    examples: ["_tickets", "_tickets people", "_tickets tickets", "we are _tickets", "_tickets of us", "_tickets of them", 
               "no we are _tickets", "no _tickets", "no we are _tickets people", "no _tickets people"],
    entities: {
        tickets: entities.numberInteger
    }
}

export const travelFrom: Intent = {
    examples: ["_doer _wishVerb _goVerb from _city", "_wishVerb _goVerb from _city", "_goVerb from _city", "_city", "from _city", 
               "no, from _city", "no, _wishVerb from _city", "no, _goVerb from _city", "no, _wishVerb _goVerb from _city" "no, _doer _wishVerb _goVerb from _city", "no, _doer _goVerb from _city"],
    entities: {
        city: entities.geoCity,
        wishVerb: wishVerbExample,
        goVerb: goVerbExample,
        doer: doerExample
    }
}

export const city: Intent = {
    examples: ["_city"],
    entities: {
        city: entities.geoCity
    }
}

export const travelTo: Intent = {
    examples: ["_doer _wishVerb _goVerb to _city", "_wishVerb _goVerb to _city", "_goVerb to _city", "_city", "to _city", 
               "no, to _city", "no, _wishVerb to _city", "no, _goVerb to _city", "no, _wishVerb _goVerb to _city" "no, _doer _wishVerb _goVerb to _city", "no, _doer _goVerb to _city"],
    entities: {
        city: entities.geoCity,
        wishVerb: wishVerbExample,
        goVerb: goVerbExample,
        doer: doerExample
    }
}

export const costQuery: Intent = {
    examples: [
        "what does it cost",
        "what is the price",
        "what does the flight cost",
        "what does the ticket cost", "what does a ticket cost",
        "what do the tickets cost",
        "what does it cost to fly to _country",
        "what does it cost to fly to _city",
        "what does it cost to fly to _airport",
        "how much is it to fly to _country",
        "how much is it to fly to _city",
        "how much is it to fly to _airport",
        "how much does it cost",
        "how much does the flight cost",
        "how much does the ticket cost", "how much does a ticket cost",
        "how much do the tickets cost",
        "how expensve is the flight to _country",
        "how expensve is the flight to _city",
        "how expensve is the flight to _airport",
        "how expensve are tickets to _country",
        "how expensve are tickets to _city",
        "how expensve are tickets to _airport"
    ],
    entities: {
        city: entities.geoCity,
        country: entities.geoCountry,
        airport: entities.airport,
    }
}

export const weatherQuery: Intent = {
    examples: [
        "how is the weather there?",
        "how is the weather in _weatherCity",
        "what is the weather in _weatherCity",
        "what is the weatherforecast in _weatherCity",
        "is it sunny in _weatherCity", "is it rainy in _weatherCity", "is it windy in _weatherCity"
    ],
    entities: {
        weatherCity: entities.geoCity
    }

}
