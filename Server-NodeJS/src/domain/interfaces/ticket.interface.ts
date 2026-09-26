/**
 * Tipo de prioridad de un ticket.
 *
 * @remarks
 * Define los niveles de prioridad disponibles para clasificar
 * la urgencia de atención de un ticket de incidencia.
 *
 * @example
 * ```ts
 * const prioridad: TicketPriority = 'Alta';
 * ```
 */
export type TicketPriority = 'Baja' | 'Media' | 'Alta' | 'Crítica';

/**
 * Tipo de estado de un ticket.
 *
 * @remarks
 * Representa el ciclo de vida de un ticket de incidencia,
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
 * Contiene la información básica necesaria para gestionar
 * y hacer seguimiento de una incidencia reportada.
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
