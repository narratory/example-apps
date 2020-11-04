import { Order } from "./interfaces"

let orders: { [key: string]: Order[] } = {}

export const getOrders = (sessionId: string) => {
  return sessionId in orders ? orders[sessionId] : []
}

export const addOrder = ({
  order,
  sessionId
}: {
  order: Order
  sessionId: string
}) => {
  orders[sessionId] = [...getOrders(sessionId), order]
}

export const replaceOrder = ({
  order,
  sessionId
}: {
  order: Order
  sessionId: string
}) => {
  orders[sessionId] = [
    ...getOrders(sessionId)
      .filter((existingOrder) => existingOrder.id != order.id)
      .concat([order])
  ]
}
