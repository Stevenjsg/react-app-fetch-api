import { useCart } from "../context/CartProvider"
import { useGetProductToCart } from "../hooks/useGetProductToCart"
import { CartIcon, TrashIcon } from "../icon"

interface Props {
  hideCart: boolean
  onClick: () => void
}

const CartProducts: React.FC<Props> = ({ hideCart, onClick }) => {
  const { clearCart } = useCart()
  const { products, Cart } = useGetProductToCart()
  const { ListOfProductsInCart } = Cart
  return (
    <aside
      className={`${
        hideCart ? "" : "translate-x-[100%]"
      } fixed right-0 top-0 z-50 grid h-screen max-h-screen w-full grid-rows-[auto,1fr] overflow-y-auto bg-green-950 transition-transform duration-700 ease-in-out md:w-[50%] lg:w-[50%] xl:w-[25%]`}
    >
      <header className="relative flex w-full flex-col items-center pb-4 pt-4">
        <h4 className="text-6xl font-bold text-white">Cart</h4>
        <span className="mt-2 flex text-white">
          <CartIcon /> {Cart.count}
        </span>
        <button onClick={onClick} className="absolute left-4 top-4 text-2xl text-white hover:animate-rotate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
        <button onClick={clearCart} className="absolute right-4 top-4 text-2xl text-white">
          <TrashIcon />
        </button>
      </header>
      <section className="p-5">
        <ul className="flex flex-col flex-wrap items-center gap-2">
          {products.length === 0 ? (
            <li className="min-h-[150px] text-center text-3xl text-white">No products in the cart</li>
          ) : (
            products.map((product) =>
              ListOfProductsInCart.map(
                (list) =>
                  list.id_Product.id === product.id && (
                    <li
                      key={product.id}
                      className="grid max-h-[150px] min-h-[100px] w-full  grid-cols-[minmax(20%,30%),minmax(20%,100%)] items-center gap-2 rounded-md bg-white p-2"
                    >
                      <img className="h-[60px] w-full object-contain" src={product.image} alt={product.title} />
                      <section className="">
                        <h2 className="text-sm font-semibold lg:text-base">{product.title}</h2>
                        <span className="inline-flex items-center  gap-2">
                          <p className="font-semibold text-green-600">${product.price}</p>
                          Quantity:
                          <p className="font-semibold text-green-600">{list.quantity}</p>
                        </span>
                      </section>
                    </li>
                  ),
              ),
            )
          )}
        </ul>
      </section>
    </aside>
  )
}

export default CartProducts
