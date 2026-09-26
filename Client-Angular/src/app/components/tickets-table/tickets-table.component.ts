import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Ticket, TicketPriority, TicketStatus } from '../../interfaces/tickets.interface';

/**
 * Componente de tabla de tickets de incidencias.
 *
 * Se utiliza para mostrar un listado de tickets en una tabla,
 * mostrando información como id, asunto, responsable asignado,
 * prioridad, estado y fecha de creación.
 *
 * @remarks
 * Este componente recibe los tickets desde un componente padre
 * a través del Input `tickets` y utiliza los mapeos `priorityMap`
 * y `statusMap` para asignar colores a los badges según la prioridad
 * y el estado de cada ticket.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-tickets-table [tickets]="ticketsList"></app-tickets-table>
 * ```
 */
@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  imports: [BadgeAtom],
})
export class TicketsTableComponent {

  /**
   * Listado de tickets que se mostrarán en la tabla.
   *
   * @type {Ticket[]}
   * @remarks
   * Este Input permite pasar un array de tickets desde un componente padre,
   * generalmente `TicketsPage`. Cada ticket debe cumplir la interfaz `Ticket`.
   */
  @Input() tickets: Ticket[] = [];

  /**
   * Mapeo de prioridades de tickets a tipos de Badge.
   *
   * @type {Record<TicketPriority, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada nivel de prioridad:
   * - 'Baja'     → 'secondary' (gris)
   * - 'Media'    → 'primary'   (azul)
   * - 'Alta'     → 'warning'   (amarillo)
   * - 'Crítica'  → 'danger'    (rojo)
   */
  priorityMap: Record<TicketPriority, BadgeType> = {
    'Baja': 'secondary',
    'Media': 'primary',
    'Alta': 'warning',
    'Crítica': 'danger',
  };

  /**
   * Mapeo de estados de tickets a tipos de Badge.
   *
   * @type {Record<TicketStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado del ticket:
   * - 'Abierto'     → 'danger'   (rojo)
   * - 'En Progreso' → 'primary'  (azul)
   * - 'En Revisión' → 'warning'  (amarillo)
   * - 'Resuelto'    → 'success'  (verde)
   * - 'Cerrado'     → 'secondary'(gris)
   */
  statusMap: Record<TicketStatus, BadgeType> = {
    'Abierto': 'danger',
    'En Progreso': 'primary',
    'En Revisión': 'warning',
    'Resuelto': 'success',
    'Cerrado': 'secondary',
  };
}
