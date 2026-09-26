/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       description: Representa un proveedor del sistema
 *       required:
 *         - id
 *         - name
 *         - contact
 *         - email
 *         - phone
 *         - price
 *         - category
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Supermercado XYZ
 *         contact:
 *           type: string
 *           example: Juan Pérez
 *         email:
 *           type: string
 *           format: email
 *           example: juan.perez@example.com
 *         phone:
 *           type: string
 *           example: "3001234567"
 *         price:
 *           type: number
 *           example: 4500
 *         category:
 *           type: string
 *           enum:
 *             - Tecnología
 *             - Alimentos
 *             - Logística
 *             - Servicios
 *           example: Tecnología
 */
export {};