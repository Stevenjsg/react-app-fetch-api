import { useReducer } from "react"
import { type idProduct, type ListOfIdProducts } from "../types"

export interface initialStateCart {
  listProduct: ListOfIdProducts
  count: number
  addProduct: (id: idProduct) => void
  removeProduct: (id: idProduct) => void
}
type actionAddProduct =
  | { type: "ADD_PRODUCT"; payload: idProduct }
  | { type: "REMOVE_PRODUCT"; payload: idProduct }

export const initialState: initialStateCart = {
  listProduct: [],
  count: 0,
  addProduct: () => {},
  removeProduct: () => {},
}
const actionHandler = {
  ADD_PRODUCT: (state: initialStateCart, action: actionAddProduct) => {
    const { payload } = action
    const { listProduct, count } = state
    const newListProduct = [...listProduct, payload]
    return { ...state, listProduct: newListProduct, count: count + 1 }
  },
  REMOVE_PRODUCT: (state: initialStateCart, action: actionAddProduct) => {
    const { payload } = action
    const { listProduct, count } = state
    const newListProduct = listProduct.filter((item) => item.id !== payload.id)
    return { ...state, listProduct: newListProduct, count: count - 1 }
  },
}

function cartReducer(
  state: initialStateCart,
  action: actionAddProduct,
): initialStateCart {
  const handler = actionHandler[action.type]
  if (handler !== undefined) {
    return handler(state, action)
  }
  return state
}

export function cartManager(): initialStateCart {
  const [{ count, listProduct }, dispatch] = useReducer(
    cartReducer,
    initialState,
  )

  const addProduct = (id: idProduct): void => {
    console.log(id)
    dispatch({ type: "ADD_PRODUCT", payload: id })
  }
  const removeProduct = (id: idProduct): void => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id })
  }

  return { listProduct, count, addProduct, removeProduct }
}
