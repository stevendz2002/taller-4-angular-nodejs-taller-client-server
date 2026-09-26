/**
 * Tipo de prioridad de un ticket de incidencia.
 *
 * @remarks
 * Define los niveles de urgencia disponibles para clasificar
 * la atención requerida de cada ticket.
 *
 * @example
 * ```ts
 * const prioridad: TicketPriority = 'Crítica';
 * ```
 */
export type TicketPriority = 'Baja' | 'Media' | 'Alta' | 'Crítica';

/**
 * Tipo de estado de un ticket de incidencia.
 *
 * @remarks
 * Representa el ciclo de vida de un ticket,
 * desde su apertura hasta su cierre definitivo.
 *
 * @example
 * ```ts
 * const estado: TicketStatus = 'En Progreso';
 * ```
 */
export type TicketStatus =
  | 'Abierto'
  | 'En Progreso'
  | 'En Revisión'
  | 'Resuelto'
  | 'Cerrado';

/**
 * Interfaz que representa un ticket o incidencia del sistema.
 *
 * @remarks
 * Contiene la información necesaria para gestionar y hacer
 * seguimiento de una incidencia reportada en el sistema.
 *
 * @example
 * ```ts
 * const ticket: Ticket = {
 *   id: 1,
 *   subject: 'Error al iniciar sesión',
 *   assigned_to: 'Ana Gómez',
 *   priority: 'Alta',
 *   status: 'Abierto',
 *   date: '2026-09-26'
 * };
 * ```
 */
export interface Ticket {
  /** Identificador único del ticket */
  id: number;

  /** Asunto o descripción breve de la incidencia */
  subject: string;

  /** Nombre del responsable asignado al ticket */
  assigned_to: string;

  /** Nivel de prioridad del ticket */
  priority: TicketPriority;

  /** Estado actual del ticket en su ciclo de vida */
  status: TicketStatus;

  /** Fecha de creación del ticket en formato ISO: YYYY-MM-DD */
  date: string;
}
