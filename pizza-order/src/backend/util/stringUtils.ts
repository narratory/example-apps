import { Order } from "./interfaces"

export const asReadable = (orders: Order[], prefix: string) => {
  return orders.map((order) => `a ${order.size} ${order.pizza}`)
}
