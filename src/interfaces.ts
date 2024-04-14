export interface Product {
    id: string,
    image: {url: string},
    code: string,
    name: string,
    price: {
        old_price?: number,
        current_price: number,
    },
    material: number
}