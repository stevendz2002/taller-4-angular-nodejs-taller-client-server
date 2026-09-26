import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { TicketsService } from './tickets.service';

/**
 * Controlador de tickets de incidencias.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con tickets,
 * delegando la lógica de negocio al `TicketsService`.
 *
 * Forma parte de la capa de presentación del módulo de tickets.
 *
 * @example
 * ```ts
 * const controller = new TicketsController();
 * router.get('/:countTickets', controller.getAllTickets);
 * ```
 */
export class TicketsController {

  /**
   * Servicio de tickets.
   *
   * @remarks
   * Instancia privada del `TicketsService` utilizada para
   * obtener los datos de los tickets.
   */
  private readonly ticketsService = new TicketsService();

  /**
   * Maneja la petición HTTP para obtener un listado de tickets.
   *
   * @remarks
   * El número de tickets a generar se obtiene desde los
   * parámetros de la ruta. Incluye un retardo simulado
   * de 2 segundos para evidenciar el estado de carga en el cliente.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/tickets/10
   * ```
   */
  getAllTickets = (req: Request, res: Response): void => {
    const { countTickets } = req.params;

    setTimeout(() => {
      this.ticketsService
        .getAllTickets(Number(countTickets))
        .then((tickets) => res.status(200).json(tickets))
        .catch((error) => HandleError.error(error, res));
    }, 2000);
  };
}
