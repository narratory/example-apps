import { v4 } from "uuid"
import { Order } from "../util/interfaces"
import * as db from "../util/db"
import { asReadable } from "../util/stringUtils"

export const handleAddOrder = (req: any, res: any) => {
  const { sessionId, order }: { sessionId: string; order: Order } = req.body

  console.log("adding order, ", JSON.stringify(order))

  db.addOrder({
    order: {
      ...order,
      id: v4()
    },
    sessionId
  })

  const orders = db.getOrders(sessionId)

  console.log("Orders are now", JSON.stringify(orders))

  res.json({
    set: {
      orderBasket: orders,
      orderList: asReadable(orders, "a"),
      orderListDefinitive: asReadable(orders, "the")
    }
  })
}
