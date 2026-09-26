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
/**
 * @openapi
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       description: Representa un ítem dentro de una orden
 *       required:
 *         - productId
 *         - productName
 *         - quantity
 *         - unitPrice
 *       properties:
 *         productId:
 *           type: string
 *           example: "d3b07384-d113-46fb-a0f5-5609653a992e"
 *         productName:
 *           type: string
 *           example: "Refined Wooden Chair"
 *         quantity:
 *           type: integer
 *           example: 2
 *         unitPrice:
 *           type: number
 *           example: 45.99
 *     OrderStatus:
 *       type: string
 *       description: Estado de la orden
 *       enum:
 *         - PENDING
 *         - PROCESSING
 *         - COMPLETED
 *         - CANCELLED
 *       example: PENDING
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - userId
 *         - userName
 *         - items
 *         - totalAmount
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         userId:
 *           type: string
 *           example: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"
 *         userName:
 *           type: string
 *           example: "Jane Doe"
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         totalAmount:
 *           type: number
 *           example: 135.50
 *         status:
 *           $ref: '#/components/schemas/OrderStatus'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-09-25T14:30:00.000Z"
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     TicketPriority:
 *       type: string
 *       description: Nivel de prioridad del ticket
 *       enum:
 *         - Baja
 *         - Media
 *         - Alta
 *         - Crítica
 *       example: Alta
 *     TicketStatus:
 *       type: string
 *       description: Estado actual del ticket en su ciclo de vida
 *       enum:
 *         - Abierto
 *         - En Progreso
 *         - En Revisión
 *         - Resuelto
 *         - Cerrado
 *       example: En Progreso
 *     Ticket:
 *       type: object
 *       description: Representa un ticket o incidencia del sistema
 *       required:
 *         - id
 *         - subject
 *         - assigned_to
 *         - priority
 *         - status
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         subject:
 *           type: string
 *           example: "El servidor de producción no responde a peticiones entrantes"
 *         assigned_to:
 *           type: string
 *           example: "Ana Gómez"
 *         priority:
 *           $ref: '#/components/schemas/TicketPriority'
 *         status:
 *           $ref: '#/components/schemas/TicketStatus'
 *         date:
 *           type: string
 *           format: date
 *           example: "2026-09-26"
 */
export {};
