import { Product } from "../interfaces/products.interface";

/**
 * Mock de productos ficticios utilizado en pruebas unitarias y desarrollo local.
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];