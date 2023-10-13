import { useContext, createContext } from "react"
import {
  cartManager,
  initialState,
  type initialStateCart,
} from "../hooks/useCardState"

export const CartContext = createContext(initialState)
interface Props {
  children: React.ReactNode
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const { count, listProduct, addProduct, removeProduct } = cartManager()
  const value = { count, listProduct, addProduct, removeProduct }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = (): initialStateCart => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
