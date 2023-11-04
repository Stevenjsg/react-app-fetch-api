export interface Products {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export type ListOfProducts = Products[]
export type ListOfCategories = string[]
export type idProduct = Pick<Products, "id">
export type ListOfIdProducts = idProduct[]

export interface Cart {
  id: number
  count: number
  ListOfProductsInCart: ListOfCart[]
}
export interface ListOfCart {
  id_Product: Products.id
  quantity: number
}
