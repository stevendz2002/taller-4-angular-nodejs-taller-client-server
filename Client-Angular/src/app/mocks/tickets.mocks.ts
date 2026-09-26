import { Ticket } from '../interfaces/tickets.interface';

/**
 * Mock de tickets ficticios utilizado en pruebas unitarias y desarrollo local.
 *
 * @remarks
 * Proporciona datos estáticos de tickets de incidencias para facilitar
 * las pruebas sin depender del backend.
 */
export const TICKETS_MOCK: Ticket[] = [
  {
    id: 1,
    subject: 'El servidor de producción no responde a peticiones entrantes',
    assigned_to: 'Carlos Ramírez',
    priority: 'Crítica',
    status: 'Abierto',
    date: '2026-09-20',
  },
  {
    id: 2,
    subject: 'La integración con el sistema de pagos falla intermitentemente',
    assigned_to: 'Ana Gómez',
    priority: 'Alta',
    status: 'En Progreso',
    date: '2026-09-22',
  },
  {
    id: 3,
    subject: 'El módulo de reportes genera datos incorrectos en el PDF',
    assigned_to: 'Luis Torres',
    priority: 'Media',
    status: 'En Revisión',
    date: '2026-09-24',
  },
];
