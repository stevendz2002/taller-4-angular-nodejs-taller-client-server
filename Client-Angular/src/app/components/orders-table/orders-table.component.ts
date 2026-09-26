import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

/**
 * Componente de tabla de órdenes.
 *
 * Se utiliza para mostrar un listado de órdenes en una tabla,
 * mostrando información como id, usuario, items, total, estado y fecha de creación.
 *
 * @remarks
 * Este componente recibe las órdenes desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado de la orden.
 */
@Component({
  selector: 'app-orders-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './orders-table.component.html',
})
export class OrdersTableComponent {
  /**
   * Listado de órdenes que se mostrarán en la tabla.
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados de órdenes a tipos de Badge.
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'PENDING': 'warning',
    'PROCESSING': 'primary',
    'COMPLETED': 'success',
    'CANCELLED': 'danger',
  };
}
