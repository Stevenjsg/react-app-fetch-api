import { type ListOfIdProducts } from "../types"

export function useSaveIdLocalStorage({
  idProducts,
}: {
  idProducts: ListOfIdProducts
}): void {
  // 1. Recuperar el array de IDs del localStorage
  const storedIdsString: string = localStorage.getItem("cartProductId") ?? "[]"
  const storedIds: number[] = JSON.parse(storedIdsString)

  // 2. Si no hay IDs guardados en localStorage, crea un array vacío
  const newIds = idProducts.map((item) => item.id)

  // 3. Añadir los nuevos IDs a ese array
  const combinedIds = [...storedIds, ...newIds]

  // 4. Filtrar el array para mantener solo IDs únicos
  const uniqueIds = Array.from(new Set(combinedIds))

  // 5. Guardar el array actualizado de nuevo en el localStorage
  localStorage.setItem("cartProductId", JSON.stringify(uniqueIds))
}
