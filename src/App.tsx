import { useEffect, useState } from "react"
import { type ListOfProducts } from "./types"
import ProductItem from "./components/ProductItem"
import NavFilter from "./components/NavFilter"
import { productsMock } from "./constant"

function App(): JSX.Element {
  // const API_URL = process.env.REACT_APP_API_URL
  // console.log(API_URL)
  // localStorage.clear()
  const [products, setProducts] = useState<ListOfProducts>([])
  useEffect(() => {
    setProducts(productsMock)
    // fetch("https://fakestoreapi.com/products")
    //   .then(async (res) => await res.json())
    //   .then((json) => {
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }, [])

  return (
    <main className="container relative mx-auto grid min-h-[100vh] min-w-full grid-rows-[auto,1fr,auto] overflow-x-hidden bg-blue-50 ">
      <header className=" z-50 flex flex-col place-content-center gap-2 pb-4 pt-4">
        <h1 className="mx-auto text-6xl font-bold after:text-sm after:font-bold after:text-green-600 after:content-['.Cart']">
          Products
        </h1>
        <NavFilter />
      </header>
      <section className="flex items-center justify-center pt-5">
        <ProductItem products={products} />
      </section>
      <footer>
        <p className="py-5 text-center text-sm font-semibold">By ❤️ SJSG {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default App
