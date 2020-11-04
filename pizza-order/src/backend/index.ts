import { cloudFunction } from "narratory-cloud"
import { handleChangeOrder } from "./operations/handleChangeOrder"
import { handleIdentifyOrder } from "./operations/handleIdentifyOrder"
import { handleAddOrder } from "./operations/handleAddOrder"

export const pizzas = cloudFunction(
  (req, res) => {
    res.send(
      ["Casino", "Diana", "Canadiana"].map((item) => {
        return {
          name: item // First synonym becomes our name (main identifier, used in speech)
          //alts: item.slice(1) // Any other synonyms are used only for NLU in this app
        }
      })
    )
  },
  {
    memory: "2GB"
  }
)

export const order = cloudFunction(
  (req, res) => {
    const { operation } = req.body
    console.log("in order..")

    if (operation.toLowerCase() == "add") {
      console.log("should add order")

      handleAddOrder(req, res)
    } else if (operation.toLowerCase() == "remove" && order) {
      console.log("should remove..")
    } else if (operation.toLowerCase() == "change") {
      handleChangeOrder(req, res)
    } else if (operation.toLowerCase() == "identify") {
      handleIdentifyOrder(req, res)
    }
  },
  {
    memory: "2GB"
  }
)
