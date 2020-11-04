import { CompositeEntity, entities, Entity, DynamicEntity, SystemEntity } from "narratory"
import { getBackendUrl } from "./backend/util/getBackendUrl"

export const size: Entity = {
  name: "size",
  enums: [
    { name: "Large", alts: ["big"] },
    { name: "Medium", alts: ["average"] },
    { name: "Small", alts: ["little"] }
  ]
}

export const pizza: DynamicEntity = {
  name: "pizza",
  default: "pizza",
  enums: [{ name: "local" }],
  url: getBackendUrl("/pizzas"),
  type: "SESSION",
  fuzzyMatching: true
}

export const quantifiedMain: CompositeEntity = {
  name: "quantifiedMain",
  entities: {
    quantity: entities.numberInteger,
    size,
    pizza
  },
  examples: [
    "_quantity _size _pizza",
    "_size _pizza",
    "_pizza",
    "_quantity _pizza"
  ],
  outputFormat: "_quantity _main_original",
  fuzzyMatching: true
}

// export const myOrdinal: SystemEntity = {
//   parent: entities.number,
//   extentions: [
//     { name: "last", alts: ["finale", "latter"] }
//   ]
// }