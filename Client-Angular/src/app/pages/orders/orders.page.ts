import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { Order } from '../../interfaces/orders.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/orders.service';

/**
 * Componente contenedor de la página de órdenes.
 *
 * Se encarga de solicitar las órdenes al backend a través de `OrdersService`
 * y pasarlas al componente de presentación `OrdersTableComponent`.
 *
 * @remarks
 * Administra el estado visual ('init' | 'loading' | 'success' | 'error')
 * mostrando un spinner de carga o un mensaje de error si falla la petición.
 */
@Component({
  selector: 'app-orders.page',
  imports: [OrdersTableComponent, AlertComponent],
  templateUrl: './orders.page.html',
})
export class OrdersPage {
  /**
   * Listado de órdenes obtenidas desde el backend.
   * @type {Order[]}
   */
  orders: Order[] = [];

  /**
   * Estado actual del componente ('init' | 'loading' | 'success' | 'error').
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para la obtención de órdenes.
   */
  private orderService = inject(OrdersService);

  /**
   * Inicializa el componente y solicita el listado de órdenes al servicio.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.orderService.getAllOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
