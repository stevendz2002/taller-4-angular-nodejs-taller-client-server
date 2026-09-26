import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ProvidersService } from "./providers.service";

/**
 * Controlador de proveedores.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con proveedores,
 * delegando la lógica de negocio al `ProvidersService`.
 */
export class ProvidersController {

  /**
   * Servicio de proveedores.
   */
  private readonly providersService = new ProvidersService();

  /**
   * Maneja la petición HTTP para obtener un listado de proveedores.
   *
   * @remarks
   * El número de proveedores a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /providers/10
   * ```
   */
  getAllProviders = (req: Request, res: Response): void => {
    const { countProviders } = req.params;

    setTimeout(() => {
      this.providersService
      .getAllProviders(Number(countProviders))
      .then((providers) => res.status(201).json(providers))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
