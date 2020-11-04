import { identifyOrder } from "../util/identifyOrder"
import { replaceOrder } from "../util/db"

export const handleChangeOrder = (req, res) => {
  const param = req.body.param
  console.log("handling change order")
  const sessionId = req.body.sessionId
  const order = identifyOrder(req)

  console.log("identified order: ", JSON.stringify(order))

  if (param === "size") {
    const { toSize } = req.body

    console.log("got toSize", toSize)
    if (toSize) {
      console.log("Updating order with new size!")

      replaceOrder({
        order: {
          ...order,
          size: toSize
        },
        sessionId
      })

      res.json({
        set: {
          updated: true
        }
      })
    } else {
      console.log("Not updating order, returning order instead")

      res.json({
        set: {
          updated: false,
          order
        }
      })
    }
  }
}
