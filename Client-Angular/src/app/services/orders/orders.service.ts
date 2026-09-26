import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { Observable } from 'rxjs';

/**
 * Servicio encargado de la gestión de órdenes.
 *
 * Proporciona métodos para obtener información de órdenes
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private ordersService: OrdersService) {}
 *
 * this.ordersService.getAllOrders(10).subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de órdenes desde el backend.
   *
   * @param countOrders Número de órdenes a obtener.
   * @returns Observable que emite un array de órdenes.
   */
  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`api/orders/${countOrders}`);
  }
}
