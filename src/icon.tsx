const CartPlusIcon = ({ size = 24, color = "currentColor" }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-shopping-cart-plus"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path d="M12.5 17h-6.5v-14h-2"></path>
    <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
    <path d="M16 19h6"></path>
    <path d="M19 16v6"></path>
  </svg>
)

const CartIcon = ({ size = 24, color = "currentColor" }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-shopping-cart"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 17h-11v-14h-2"></path>
    <path d="M6 5l14 1l-1 7h-13"></path>
  </svg>
)

export { CartPlusIcon, CartIcon }
