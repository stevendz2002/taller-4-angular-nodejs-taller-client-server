import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ProviderCategory, Provider } from '../../interfaces/providers.interface';

/**
 * Componente de tabla de proveedores.
 *
 * Se utiliza para mostrar un listado de proveedores en una tabla,
 * mostrando información como nombre, categoría, precio y un badge
 * visual que indica la categoría de cada proveedor.
 *
 * @remarks
 * Este componente recibe los proveedores desde un componente padre
 * a través del Input `providers` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-providers-table [providers]="providersList"></app-providers-table>
 * ```
 */
@Component({
  selector: 'app-providers-table',
  standalone: true,
  templateUrl: './providers-table.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProvidersTableComponent {
  /**
   * Listado de proveedores que se mostrarán en la tabla.
   * @type {Provider[]}
   * @remarks
   * Este Input permite pasar un array de proveedores desde un componente padre,
   * generalmente `ListProvidersComponent`. Cada proveedor debe cumplir la interfaz `Provider`.
   */
  @Input() providers: Provider[] = [];
  /**
   * Mapeo de categorías de proveedores a tipos de Badge.
   * @type {Record<ProviderCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Tecnología' → 'primary'
   * - 'Alimentos' → 'success'
   * - 'Logística' → 'warning'
   * - 'Servicios' → 'info'
   * Esto permite que en la tabla cada proveedor tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<ProviderCategory, BadgeType> = {
    'Tecnología': 'primary',
    'Alimentos': 'success',
    'Logística': 'warning',
    'Servicios': 'info'
  }
}
