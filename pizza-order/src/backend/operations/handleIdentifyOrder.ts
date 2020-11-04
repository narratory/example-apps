import { identifyOrder } from "../util/identifyOrder"

export const handleIdentifyOrder = (req, res) => {
  const order = identifyOrder(req)

  res.json({
    set: order
  })
}
