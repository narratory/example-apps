import { getOrders } from "./db"

export const identifyOrder = (req) => {
  const { pizza, size, ordinal, sessionId } = req.body

  const orders = getOrders(sessionId)

  if (orders.length == 0) {
    return null
  }

  let filteredOrders = [...orders]

  if (pizza) {
    filteredOrders = filteredOrders.filter((item) => item.pizza == pizza)
    if (filteredOrders.length == 1) {
      return filteredOrders[0]
    } else if (filteredOrders.length == 0) {
      return null
    }
  }

  if (size) {
    filteredOrders = filteredOrders.filter((item) => item.size == size)
    if (filteredOrders.length == 1) {
      return filteredOrders[0]
    } else if (filteredOrders.length == 0) {
      return null
    }
  }

  if (ordinal) {
    try {
      const index =
        (ordinal.toLowerCase() == "last"
          ? filteredOrders.length
          : parseInt(ordinal)) - 1
      return filteredOrders[index]
    } catch (err) {
      console.log(err)
      return null
    }
  }

  return null
}
