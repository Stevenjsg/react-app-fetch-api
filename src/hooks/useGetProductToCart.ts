import { type Cart } from "./../types.d"
import { useEffect, useState } from "react"
import { type ListOfProducts } from "../types"
import { useCart } from "../context/CartProvider"
import { useSaveIdLocalStorage } from "./useSaveIdLocalStorage"

interface useGetProductToCartReturn {
  Cart: Cart
  error: string | null
  setError: React.Dispatch<React.SetStateAction<string | null>>
  products: ListOfProducts
  setProducts: React.Dispatch<React.SetStateAction<ListOfProducts>>
}

export function useGetProductToCart(): useGetProductToCartReturn {
  const [error, setError] = useState<string | null>("")
  const { Cart } = useCart()
  const [products, setProducts] = useState<ListOfProducts>([])
  useSaveIdLocalStorage({ cartToSave: Cart })

  useEffect(() => {
    const newArrayIds = Cart.ListOfProductsInCart.map((product) => product.id_Product.id)

    if (newArrayIds.length === 0) {
      console.log("No hay productos en el carrito")
      setError("No hay productos en el carrito")
      return
    }

    // Fetch products using newArrayIds
    const fetchProducts = async (): Promise<void> => {
      try {
        const fetchedProducts = await Promise.all(
          newArrayIds.map(
            async (uniqueId) =>
              await fetch(`https://fakestoreapi.com/products/${uniqueId}`).then(async (res) => await res.json()),
          ),
        )

        setProducts(fetchedProducts)
        console.log(fetchedProducts)
      } catch (err) {
        console.error("Error fetching products: ", err)
      }
    }

    fetchProducts().catch((err) => {
      console.error("Error fetching products:", err)
    })
  }, [Cart])

  return { Cart, products, error, setProducts, setError }
}
