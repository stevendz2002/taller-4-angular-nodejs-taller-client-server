import { Component, inject } from '@angular/core';
import { ProvidersTableComponent } from '../../components/providers-table/providers-table';
import { Provider } from '../../interfaces/providers.interface';
import { ProvidersService } from '../../services/providers/providers';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de provideros.
 *
 * Se utiliza para gestionar y mostrar un listado de provideros
 * utilizando el componente `ProvidersTable`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProvidersService`
 * para obtener los provideros y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-providers-page',
  templateUrl: `./providers.page.html`,
  standalone: true,
  imports: [ProvidersTableComponent, AlertComponent]
})
export class ProvidersPage {
  /**
   * Listado de provideros obtenidos desde el servicio.
   * @type {Provider[]}
   */
  providers: Provider[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener provideros.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private providersService = inject(ProvidersService);

  /**
   * Inicializa el componente y carga los provideros.
   * @remarks
   * Se suscribe al método `getAllProviders()` del servicio y
   * asigna los datos recibidos a la propiedad `providers`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.providersService.getAllProviders(10).subscribe({
      next: (providers) => {
        this.providers = providers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
