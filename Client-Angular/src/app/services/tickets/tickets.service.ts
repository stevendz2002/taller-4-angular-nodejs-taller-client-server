import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../interfaces/tickets.interface';

/**
 * Servicio encargado de la gestión de tickets de incidencias.
 *
 * @remarks
 * Proporciona métodos para obtener información de tickets
 * desde la API REST del backend.
 *
 * @example
 * ```ts
 * const ticketsService = inject(TicketsService);
 *
 * ticketsService.getAllTickets(10).subscribe(tickets => {
 *   console.log(tickets);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de tickets de incidencias desde el backend.
   *
   * @param countTickets Número de tickets a obtener.
   * @returns Observable que emite un array de tickets.
   *
   * @example
   * ```ts
   * this.ticketsService.getAllTickets(10).subscribe(tickets => {
   *   console.log(tickets);
   * });
   * ```
   */
  getAllTickets(countTickets: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(`api/tickets/${countTickets}`);
  }
}
