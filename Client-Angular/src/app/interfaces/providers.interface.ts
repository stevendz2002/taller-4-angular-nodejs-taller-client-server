/**
 * Interfaz que representa un proveedor.
 *
    * @remarks
    * Esta interfaz define la estructura de un proveedor, incluyendo su identificador único, nombre, contacto, correo electrónico, teléfono, categoría y precio.
    *
    * @example
    * ```ts
    * const proveedor: Provider = {
    *  id: 1,
    *  name: 'Distribuidora de Lácteos S.A.',
    *  contact: 'Juan Pérez',
    *  email: 'juan.perez@distribuidora.com',
    *  phone: '555-1234',
    *  category: 'Lacteos',
    *  price: 4500
    * };
    * ```
 */
/**
 * Campos del proveedor.
 *
 * @remarks
 * - `id`: Identificador único del proveedor.
 * - `name`: Nombre o descripción del proveedor.
 * - `contact`: Persona de contacto en la empresa.
 * - `email`: Correo electrónico del proveedor.
 * - `phone`: Teléfono de contacto del proveedor.
 * - `category`: Categoría del proveedor.
 * - `price`: Precio del proveedor en pesos colombianos.
 *
 */

export interface Provider {
    /** Identificador único del proveedor */
    id: number;

    /** Nombre o descripción del proveedor */
    name: string;

    /** Contacto del proveedor */
    contact: string;

    /** Correo electrónico del proveedor */
    email: string;
    
    /** Teléfono de contacto del proveedor */
    phone: string;

    /** Categoría del proveedor */
    category: ProviderCategory;

    /** Precio del proveedor en pesos */
    price: number;
}

/**
 * Tipo de categoría de proveedor.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
    'Tecnología' → badge primary
    'Alimentos' → badge success
    'Logística' → badge warning
    'Servicios' → badge info
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: ProviderCategory = 'Tecnología';
 * ```
 */
export type ProviderCategory = 'Tecnología' | 'Alimentos' | 'Logística' | 'Servicios';
