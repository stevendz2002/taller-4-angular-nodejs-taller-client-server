import { Router } from 'express';
import { TicketsController } from './tickets.controller';

/**
 * Clase que define las rutas del módulo de tickets.
 *
 * @remarks
 * Expone los endpoints HTTP del módulo de tickets,
 * conectando cada ruta con su método controlador correspondiente.
 *
 * @example
 * ```ts
 * router.use('/api/tickets', TicketsRoutes.routes);
 * ```
 */
export class TicketsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TicketsController();

    /**
     * @openapi
     * /api/tickets/{countTickets}:
     *   get:
     *     summary: Obtener listado de tickets de incidencias
     *     description: >
     *       Retorna una lista de tickets de incidencias generados dinámicamente
     *       según la cantidad solicitada. Cada ticket incluye id, asunto,
     *       responsable asignado, prioridad, estado y fecha de creación.
     *     tags:
     *       - Tickets
     *     parameters:
     *       - in: path
     *         name: countTickets
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de tickets a generar
     *     responses:
     *       200:
     *         description: Lista de tickets generados exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Ticket'
     *       400:
     *         description: Parámetro inválido
     *       500:
     *         description: Error interno del servidor
     */
    router.get('/:countTickets', controller.getAllTickets);

    return router;
  }
}
