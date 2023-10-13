import { useEffect, useState } from "react"
import { type ListOfIdProducts, type ListOfProducts } from "../types"
import { useSaveIdLocalStorage } from "./useSaveIdLocalStorage"

interface useGetProductToCartReturn {
  products: ListOfProducts
  setProducts: React.Dispatch<React.SetStateAction<ListOfProducts>>
}

export function useGetProductToCart({
  id,
}: {
  id: ListOfIdProducts
}): useGetProductToCartReturn {
  const [products, setProducts] = useState<ListOfProducts>([])
  console.log(id)
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      if (id.length === 0) {
        const storedIdsString: string =
          localStorage.getItem("cartProductId") ?? "[]"
        const newid: ListOfIdProducts = JSON.parse(storedIdsString)
        console.log(newid)
        try {
          const fetchedProducts = await Promise.all(
            newid.map(
              async (uniqueId) =>
                await fetch(
                  `https://fakestoreapi.com/products/${JSON.stringify(
                    uniqueId,
                  )}`,
                ).then(async (res) => await res.json()),
            ),
          )

          useSaveIdLocalStorage({ idProducts: id })
          setProducts(fetchedProducts)
          console.log(fetchedProducts)
        } catch (error) {}
      } else {
        const uniqueIds = Array.from(new Set(id.map((item) => item.id))) // Filtrar IDs únicos
        console.log(uniqueIds)
        try {
          const fetchedProducts = await Promise.all(
            uniqueIds.map(
              async (uniqueId) =>
                await fetch(
                  `https://fakestoreapi.com/products/${uniqueId}`,
                ).then(async (res) => await res.json()),
            ),
          )

          useSaveIdLocalStorage({ idProducts: id })
          setProducts(fetchedProducts)
          console.log(fetchedProducts)
        } catch (err) {
          console.error("Error fetching products:", err)
        }
      }
    }

    fetchProducts().catch((err) => {
      console.error("Error fetching products:", err)
    })
  }, [id])

  return { products, setProducts }
}
