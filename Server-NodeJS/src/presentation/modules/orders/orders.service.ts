import { faker } from "@faker-js/faker";
import { Order, OrderItem, OrderStatus } from "../../../domain/interfaces/orders.interface";

/**
 * Servicio encargado de la generación y gestión de órdenes.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar órdenes
 * ficticias con productos, totales, estados y fechas.
 */
export class OrdersService {

  /**
   * Estados posibles para las órdenes.
   */
  private readonly orderStatuses: OrderStatus[] = [
    'PENDING',
    'PROCESSING',
    'COMPLETED',
    'CANCELLED',
  ];

  /**
   * Obtiene un listado de órdenes generadas dinámicamente.
   *
   * @param countOrders Cantidad de órdenes a generar
   * @returns Promesa que resuelve un arreglo de órdenes
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera una lista de ítems de orden ficticios.
   *
   * @returns Arreglo de OrderItem
   */
  private generateItems(): OrderItem[] {
    const itemCount = faker.number.int({ min: 1, max: 4 });
    const items: OrderItem[] = [];

    for (let i = 0; i < itemCount; i++) {
      items.push({
        productId: faker.string.uuid(),
        productName: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 5 }),
        unitPrice: parseFloat(faker.commerce.price({ min: 10, max: 200, dec: 2 })),
      });
    }

    return items;
  }

  /**
   * Genera una orden ficticia completa con todos sus datos.
   *
   * @param id Identificador único de la orden
   * @returns Promesa que resuelve una orden
   */
  private generateOrder(id: number): Promise<Order> {
    const items = this.generateItems();
    const totalAmount = parseFloat(
      items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0).toFixed(2)
    );

    return Promise.resolve({
      id,
      userId: faker.string.uuid(),
      userName: faker.person.fullName(),
      items,
      totalAmount,
      status: faker.helpers.arrayElement(this.orderStatuses),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    });
  }
}