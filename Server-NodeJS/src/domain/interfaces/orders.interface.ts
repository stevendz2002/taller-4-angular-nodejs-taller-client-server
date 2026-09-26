/**
 * Interfaz que representa un ítem dentro de una orden.
 *
 * Contiene los datos del producto adquirido, la cantidad y el precio unitario.
 */
export interface OrderItem {
  /** Identificador único del producto */
  productId: string;

  /** Nombre del producto */
  productName: string;

  /** Cantidad solicitada del producto */
  quantity: number;

  /** Precio unitario del producto */
  unitPrice: number;
}

/**
 * Tipo que define los estados posibles de una orden.
 *
 * - 'PENDING': Orden creada pendiente de procesamiento.
 * - 'PROCESSING': Orden en proceso de preparación/envío.
 * - 'COMPLETED': Orden completada satisfactoriamente.
 * - 'CANCELLED': Orden cancelada.
 */
export type OrderStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';

/**
 * Interfaz que representa una orden de compra en el sistema.
 *
 * Contiene la información del usuario, los artículos comprados,
 * el total acumulado, el estado y la fecha de creación.
 *
 * @example
 * ```ts
 * const orden: Order = {
 *   id: 1,
 *   userId: 'a1b2c3d4',
 *   userName: 'Carlos Pérez',
 *   items: [
 *     { productId: 'p1', productName: 'Teclado', quantity: 1, unitPrice: 50 }
 *   ],
 *   totalAmount: 50,
 *   status: 'COMPLETED',
 *   createdAt: '2026-09-26T12:00:00.000Z'
 * };
 * ```
 */
export interface Order {
  /** Identificador numérico único de la orden */
  id: number;

  /** Identificador del usuario que realizó la orden */
  userId: string;

  /** Nombre del usuario asociado a la orden */
  userName: string;

  /** Lista de artículos incluidos en la orden */
  items: OrderItem[];

  /** Monto total de la orden */
  totalAmount: number;

  /** Estado actual de la orden */
  status: OrderStatus;

  /** Fecha y hora de creación en formato ISO */
  createdAt: string;
}

