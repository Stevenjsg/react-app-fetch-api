import { useEffect } from "react"
import { type Cart } from "../types"
interface Props {
  cartToSave: Cart
}

export function useSaveIdLocalStorage({ cartToSave }: Props): void {
  useEffect(() => {
    // Obtener el carrito almacenado del localStorage
    const storedCartString = localStorage.getItem("cartProduct")

    // Si no hay carrito almacenado, simplemente guardar el carrito proporcionado y salir
    if (storedCartString === null) {
      localStorage.setItem("cartProduct", JSON.stringify(cartToSave))
      return
    }

    const storedCart: Cart = JSON.parse(storedCartString)
    console.log(storedCart.id)
    console.log(cartToSave.id)
    // Si los IDs coinciden, actualizar solo la lista de productos
    if (cartToSave.id === storedCart.id) {
      storedCart.count = cartToSave.count
      storedCart.ListOfProductsInCart = cartToSave.ListOfProductsInCart

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("cartProduct", JSON.stringify(storedCart))
    }
  }, [cartToSave])
}
