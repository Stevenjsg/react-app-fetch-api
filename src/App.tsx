import { useEffect, useState } from "react"
import { type ListOfProducts } from "./types"
import CartProducts from "./components/CartProducts"
import ProductItem from "./components/ProductItem"
import { CartIcon } from "./icon"
import NavFilter from "./components/NavFilter"

function App(): JSX.Element {
  const [products, setProducts] = useState<ListOfProducts>([])
  const [hideCart, setHideCart] = useState<boolean>(false)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(async (res) => await res.json())
      .then((json) => {
        setProducts(json)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handleOpenCart = (): void => {
    setHideCart((prev) => !prev)
  }
  return (
    <main className="container relative mx-auto grid min-h-[100vh] min-w-full grid-rows-[auto,1fr,auto] overflow-x-hidden bg-blue-50 ">
      <button
        className="btn-primary fixed right-5 top-10 z-50 opacity-60 hover:opacity-100 lg:right-[7.2rem]"
        onClick={handleOpenCart}
      >
        <CartIcon />
      </button>
      <header className="flex place-content-center pb-4 pt-4">
        <h1 className="text-6xl font-bold">Products</h1>
        <span className="font-bold text-green-600">Cart</span>
      </header>
      <CartProducts hideCart={hideCart} onClick={handleOpenCart} />
      <NavFilter />
      <section className="border pt-5">
        <ProductItem products={products} />
      </section>
      <footer>
        <p className="py-5 text-center text-sm font-semibold">
          By ❤️ SJSG {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}

export default App
