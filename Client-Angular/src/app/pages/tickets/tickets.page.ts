import { Component, inject } from '@angular/core';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { Ticket } from '../../interfaces/tickets.interface';
import { TicketsService } from '../../services/tickets/tickets.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de la página de tickets de incidencias.
 *
 * @remarks
 * Este componente actúa como contenedor inteligente, encargado de consumir
 * el servicio `TicketsService` para obtener los tickets del backend y
 * pasarlos al componente de tabla `TicketsTableComponent`.
 *
 * Gestiona los estados del ciclo de vida de la carga:
 * - `init`: estado inicial antes de la carga
 * - `loading`: carga en progreso
 * - `success`: datos obtenidos correctamente
 * - `error`: fallo durante la obtención de datos
 *
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <!-- Renderizado automáticamente por el router en /tickets -->
 * <app-tickets></app-tickets>
 * ```
 */
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  imports: [TicketsTableComponent, AlertComponent],
})
export class TicketsPage {

  /**
   * Listado de tickets obtenidos desde el servicio.
   * @type {Ticket[]}
   */
  tickets: Ticket[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener tickets de incidencias.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private ticketsService = inject(TicketsService);

  /**
   * Inicializa el componente y carga los tickets desde el backend.
   *
   * @remarks
   * Se suscribe al método `getAllTickets()` del servicio y
   * asigna los datos recibidos a la propiedad `tickets`.
   * Actualiza el estado del componente según el resultado de la petición.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ticketsService.getAllTickets(10).subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
