import { useEffect, useState } from "react"
import CartProducts from "./CartProducts"
import { CartIcon } from "../icon"

function NavFilter(): JSX.Element {
  const [category, setCategory] = useState<string[]>([""])
  const [open, setOpen] = useState<boolean>(false)
  const [hideCart, setHideCart] = useState<boolean>(false)

  const handleButton = (): void => {
    setOpen((prev) => !prev)
  }
  const handleOpenCart = (): void => {
    setHideCart((prev) => !prev)
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(async (res) => await res.json())
      .then((json) => {
        setCategory(json)
      })
      .catch((err) => {
        console.log(err)
        throw err
      })
  }, [])
  return (
    <>
      <nav className="relative mx-auto flex w-full flex-col items-center">
        <div className="flex items-center gap-2">
          <button onClick={handleButton} className="btn-primary justify-end md:hidden">
            <span>Categorys</span>
          </button>
          <button className="btn-primary " onClick={handleOpenCart}>
            <CartIcon />
          </button>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-12 z-40 rounded-md bg-green-600 p-2 shadow md:static md:block md:w-full md:bg-transparent md:opacity-100 md:shadow-none`}
        >
          <h5 className="px-2 text-center text-xl font-semibold text-white  md:text-black">Categorys</h5>
          <ul className="flex w-full flex-col gap-2 p-2 font-semibold text-white md:flex-row md:justify-evenly md:text-black ">
            {category.length === 0 ? (
              <li className="border-y-2">
                <a href="#">No hay categorias</a>
              </li>
            ) : (
              category.map((cat) => (
                <li
                  className="rounded border-b-2 p-1 font-sans capitalize transition-colors duration-700 ease-out hover:border-green-700 hover:bg-white/10 md:hover:bg-black/5"
                  key={cat}
                >
                  <a href="#">{cat}</a>
                </li>
              ))
            )}
          </ul>
        </div>
      </nav>
      <CartProducts hideCart={hideCart} onClick={handleOpenCart} />
    </>
  )
}

export default NavFilter
