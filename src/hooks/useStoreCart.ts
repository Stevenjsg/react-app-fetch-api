import { useReducer } from "react"
import { type Cart, type idProduct } from "../types"

export interface initialStateCart {
  Cart: Cart
  addProduct: (id: idProduct) => void
  removeProduct: (id: idProduct) => void
  clearCart: () => void
}
type actionCartProduct =
  | { type: "ADD_PRODUCT"; payload: idProduct }
  | { type: "REMOVE_PRODUCT"; payload: idProduct }
  | { type: "CLEAR_CART" }

export const initialState: initialStateCart = {
  Cart: {
    id: 1,
    count: 0,
    ListOfProductsInCart: [],
  },
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
}
function cartReducer(state: initialStateCart, action: actionCartProduct): initialStateCart {
  const { type } = action
  const { Cart } = state
  if (type === "ADD_PRODUCT") {
    const { ListOfProductsInCart } = Cart

    // Verificar si el producto ya está en el carrito
    const existingProduct = ListOfProductsInCart.find((product) => product.id_Product.id === action.payload.id)
    if (existingProduct !== undefined) {
      // Si el producto ya existe, incrementar la cantidad

      return {
        ...state,
        Cart: {
          ...Cart,
          count: Cart.count + 1,
          ListOfProductsInCart: ListOfProductsInCart.map((product) =>
            product.id_Product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product,
          ),
        },
      }
    } else {
      // Si el producto no existe, agregarlo al carrito y establecer la cantidad a 1
      return {
        ...state,
        Cart: {
          ...Cart,
          count: Cart.count + 1,
          ListOfProductsInCart: [
            ...ListOfProductsInCart,
            {
              id_Product: action.payload,
              quantity: 1,
            },
          ],
        },
      }
    }
  }
  if (type === "REMOVE_PRODUCT") {
    return {
      ...state,
      Cart: {
        ...Cart,
        ListOfProductsInCart: [
          ...Cart.ListOfProductsInCart,
          {
            id_Product: action.payload,
            quantity: 1,
          },
        ],
        count: -1,
      },
    }
  }
  if (type === "CLEAR_CART") {
    return {
      ...state,
      Cart: {
        ...Cart,
        ListOfProductsInCart: [],
        count: 0,
      },
    }
  }
  return state
}
const initialCartState = (): initialStateCart => {
  const storedCartString = localStorage.getItem("cartProduct")
  console.log(storedCartString)
  if (storedCartString !== null) {
    const data = JSON.parse(storedCartString) as Cart
    return {
      ...initialState, // extendemos initialState
      Cart: data, // sobrescribimos solo el Cart
    }
  }
  return initialState
}

export function cartManager(): initialStateCart {
  const [state, dispatch] = useReducer(cartReducer, undefined, initialCartState)
  const addProduct = (id: idProduct): void => {
    dispatch({ type: "ADD_PRODUCT", payload: id })
  }
  const removeProduct = (id: idProduct): void => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id })
  }
  const clearCart = (): void => {
    dispatch({ type: "CLEAR_CART" })
  }
  console.log(state)
  return { Cart: state.Cart, addProduct, removeProduct, clearCart }
}
