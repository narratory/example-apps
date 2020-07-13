import { Intent, entities } from "narratory"

export const notDelivered : Intent = {
    examples: [
        "I didn't receive my package",
        "I didn't receive my delivery",
        "I didn't receive my order",
        "I haven't received my tshirt",
        "I haven't received my products",
        "where is my tshirt",
        "I didnt get my order",
        "I haven't got my package",
        "where is it"
    ]
}

export const wrongQuantity : Intent = {
    examples: [
        "wrong quantity",
        "I ordered the wrong amount",
        "I ordered the wrong quantity",
        "I ordered too many",
        "I ordered too few",
        "I want more",
        "I want less"
    ]
}

export const wrongColor : Intent = {
    entities: {
        wrongColor: entities.color,
        newColor: entities.color
    },
    examples: [
        "It is the wrong color",
        "I ordered the wrong color",
        "I want it in _newColor instead",
        "I don't want it in _newColor",
        "I do not want it in _wrongColor",
        "I don't like _wrongColor",
        "I wanna change it to _newColor",
        "I have the wrong color",
    ]
}