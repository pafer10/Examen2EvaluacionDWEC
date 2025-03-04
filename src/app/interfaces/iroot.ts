import { IProducto } from "./iproducto"

export interface IRoot {
    page: number
    per_page: number
    total: number
    total_pages: number
    results: IProducto[]
}
