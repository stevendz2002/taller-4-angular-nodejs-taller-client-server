import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { ProvidersPage } from './pages/providers/providers.page';
import { OrdersPage } from './pages/orders/orders.page';
import { TicketsPage } from './pages/tickets/tickets.page';


/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link ProvidersPage}
 * @see {@link OrdersPage}
 * @see {@link TicketsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

    /**
   * Ruta de proveedores.
   *
   * @remarks
   * Renderiza el componente `ProvidersPage`, encargado
   * de mostrar y gestionar el listado de proveedores.
   */
  { path: 'providers', component: ProvidersPage },


  /**
   * Ruta de pedidos.
   *
   * @remarks
   * Renderiza el componente `OrdersPage`, encargado
   * de mostrar y gestionar el listado de pedidos.
   */
  { path: 'orders', component: OrdersPage},

  /**
   * Ruta de tickets de incidencias.
   *
   * @remarks
   * Renderiza el componente `TicketsPage`, encargado
   * de mostrar y gestionar el listado de tickets de incidencias.
   */
  { path: 'tickets', component: TicketsPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];

