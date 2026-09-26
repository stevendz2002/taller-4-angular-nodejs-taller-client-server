import { Router } from "express";
import { ProvidersController } from "./providers.controller";

export class ProvidersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProvidersController();

    /**
     * @openapi
     * /api/providers/{countProviders}:
     *   get:
     *     summary: Obtener listado de proveedores generados dinámicamente
     *     description: Retorna una lista de provideros generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Providers
     *     parameters:
     *       - in: path
     *         name: countProviders
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de proveedores a generar
     *     responses:
     *       200:
     *         description: Lista de proveedores generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Provider'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countProviders", controller.getAllProviders);

    return router;
  }
}