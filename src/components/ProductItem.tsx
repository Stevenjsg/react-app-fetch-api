import { type idProduct, type ListOfProducts } from "../types"
import { useCart } from "../context/cartContext"
import { CartPlusIcon } from "../icon"

interface Props {
  products: ListOfProducts
}
const animated = "transition-all delay-75 duration-1000 ease-in-out"
const ProductItem: React.FC<Props> = ({ products }) => {
  const { addProduct } = useCart()
  const handleAddToCart = (product: idProduct): void => {
    addProduct({ id: product.id })
  }
  return (
    <>
      {products.length === 0 ? (
        <li className="grid grid-rows-[auto,1fr,auto] rounded-md border bg-white p-2">
          <p>No hay productos</p>
        </li>
      ) : (
        products.map((product) => (
          <li
            className={`${animated} group relative grid h-[450px] max-h-[650px] grid-rows-[auto,1fr,auto] place-content-center overflow-hidden  rounded-md border bg-white p-2 hover:bg-black`}
            key={product.id}
          >
            <hgroup className="block h-[64px] group-hover:hidden md:h-[90px] ">
              <h2 className=" text-center text-lg font-semibold lg:text-2xl">
                {product.title}
              </h2>
            </hgroup>
            <section className="mb-4 flex flex-col flex-wrap place-content-center">
              <img
                className="block h-[150px] w-full object-contain opacity-100 group-hover:hidden group-hover:opacity-0 md:my-5"
                src={product.image}
                alt={product.title}
              />
              <article
                className={`${animated} hidden flex-col place-content-center overflow-y-hidden  group-hover:flex group-hover:h-fit group-hover:font-bold`}
              >
                <section className="opacity-0  group-hover:animate-fadeIn group-hover:text-white group-hover:opacity-100">
                  <p className="text-sm">{product.description}</p>
                  <p className="text-xs text-green-500/50">
                    Category: {product.category}
                  </p>
                </section>
              </article>
            </section>
            <section className="absolute bottom-1 flex w-full justify-between p-2">
              <button
                onClick={() => {
                  handleAddToCart({ id: product.id })
                }}
                className="btn-primary"
              >
                <CartPlusIcon />
              </button>
              <span className="flex h-10 items-center border border-dashed border-black p-1 group-hover:border-white group-hover:font-semibold group-hover:text-white">
                ${product.price}
              </span>
            </section>
          </li>
        ))
      )}
    </>
  )
}

export default ProductItem
