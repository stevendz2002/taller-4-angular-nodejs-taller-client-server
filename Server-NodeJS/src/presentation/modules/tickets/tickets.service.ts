import { faker } from '@faker-js/faker';
import { Ticket, TicketPriority, TicketStatus } from '../../../domain/interfaces/ticket.interface';

/**
 * Servicio encargado de la generación y gestión de tickets de incidencias.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar tickets
 * ficticios con datos realistas, principalmente con fines de
 * prueba o demostración del sistema de gestión de incidencias.
 *
 * @example
 * ```ts
 * const service = new TicketsService();
 * const tickets = await service.getAllTickets(10);
 * ```
 */
export class TicketsService {

  /**
   * Lista de prioridades disponibles para los tickets.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un nivel de prioridad
   * a cada ticket generado.
   */
  private readonly priorities: TicketPriority[] = [
    'Baja',
    'Media',
    'Alta',
    'Crítica',
  ];

  /**
   * Lista de estados disponibles para los tickets.
   *
   * @remarks
   * Representa el ciclo de vida de un ticket de incidencia.
   */
  private readonly statuses: TicketStatus[] = [
    'Abierto',
    'En Progreso',
    'En Revisión',
    'Resuelto',
    'Cerrado',
  ];

  /**
   * Obtiene un listado de tickets generados dinámicamente.
   *
   * @param countTickets Cantidad de tickets a generar
   * @returns Promesa que resuelve un arreglo de tickets
   *
   * @example
   * ```ts
   * const tickets = await ticketsService.getAllTickets(5);
   * ```
   */
  public async getAllTickets(countTickets: number): Promise<Ticket[]> {
    const tickets: Promise<Ticket>[] = [];

    for (let i = 1; i <= countTickets; i++) {
      tickets.push(this.generateTicket(i));
    }

    return Promise.all(tickets);
  }

  /**
   * Genera un ticket ficticio de incidencia.
   *
   * @param id Identificador único del ticket
   * @returns Promesa que resuelve un ticket generado con datos aleatorios
   *
   * @remarks
   * Utiliza `faker` para generar datos realistas como el asunto,
   * el responsable asignado y la fecha de creación.
   */
  private generateTicket(id: number): Promise<Ticket> {
    return Promise.resolve({
      id,
      subject: faker.hacker.phrase(),
      assigned_to: `${faker.person.firstName()} ${faker.person.lastName()}`,
      priority: faker.helpers.arrayElement(this.priorities),
      status: faker.helpers.arrayElement(this.statuses),
      date: faker.date
        .between({ from: '2026-01-01', to: '2026-12-31' })
        .toISOString()
        .split('T')[0],
    });
  }
}
