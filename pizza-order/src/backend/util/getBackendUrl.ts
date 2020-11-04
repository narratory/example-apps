const local = false
const ngrokUri =
  "https://e32729cc9334.ngrok.io/pizza-order-narratory-awahqt/europe-west1"
const prodUri =
  "https://europe-west1-pizza-order-narratory-awahqt.cloudfunctions.net"

export const getBackendUrl = (path: string) => {
  return (local ? ngrokUri : prodUri) + path
}
