import { createRoot } from "react-dom/client"
import App from "./App"
import "./global.css"
import { CartProvider } from "./context/CartProvider"
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!)
root.render(
  <CartProvider>
    <App />
  </CartProvider>,
)
