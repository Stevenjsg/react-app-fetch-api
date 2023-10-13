import { useCart } from "../context/cartContext"
import { useGetProductToCart } from "../hooks/useGetProductToCart"
import { CartIcon } from "../icon"

interface Props {
  hideCart: boolean
  onClick: () => void
}

const CartProducts: React.FC<Props> = ({ hideCart, onClick }) => {
  const { listProduct, count } = useCart()
  const { products } = useGetProductToCart({ id: listProduct })
  return (
    <aside
      className={`${
        hideCart ? "" : "translate-x-[100%]"
      } fixed right-0 z-50 grid h-screen max-h-screen w-full grid-rows-[auto,1fr] overflow-y-auto bg-green-950 transition-transform duration-700 ease-in-out md:w-[50%] lg:w-[50%] xl:w-[25%]`}
    >
      <header className="relative flex w-full flex-col items-center pb-4 pt-4">
        <h4 className="text-6xl font-bold text-white">Cart</h4>
        <span className="mt-2 flex text-white">
          <CartIcon /> {count}
        </span>
        <button
          onClick={onClick}
          className="absolute left-4 top-4 text-2xl text-white hover:animate-rotate"
        >
          X
        </button>
      </header>
      <section className="p-5">
        <ul className="flex flex-col flex-wrap items-center gap-2">
          {products.length === 0 ? (
            <li className="min-h-[150px] text-center text-3xl text-white">
              No products in the cart
            </li>
          ) : (
            products.map((product) => (
              <li
                key={product.id}
                className="grid max-h-[150px] min-h-[100px] w-full  grid-cols-[minmax(20%,30%),minmax(20%,100%)] items-center gap-2 rounded-md bg-white p-2"
              >
                <img
                  className="h-[60px] w-full object-contain"
                  src={product.image}
                  alt={product.title}
                />
                <section className="">
                  <h2 className="text-sm font-semibold lg:text-base">
                    {product.title}
                  </h2>
                  <p className="font-semibold text-green-600">
                    ${product.price}
                  </p>
                </section>
              </li>
            ))
          )}
        </ul>
      </section>
    </aside>
  )
}

export default CartProducts
