import { useEffect, useState } from "react"

function NavFilter(): JSX.Element {
  const [category, setCategory] = useState<string[]>([""])
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
    <nav className="container mx-auto flex w-full flex-col items-center border ">
      <h5 className="text-2xl font-semibold">Categorys</h5>
      <ul className="flex w-full items-center justify-evenly p-2 font-semibold">
        {category.length === 0 ? (
          <li className="border-y-2">
            <a href="#">No hay categorias</a>
          </li>
        ) : (
          category.map((cat) => (
            <li
              className="border-b-2 font-sans capitalize transition-colors duration-700 ease-out hover:border-green-500"
              key={cat}
            >
              <a href="#">{cat}</a>
            </li>
          ))
        )}
      </ul>
    </nav>
  )
}

export default NavFilter
