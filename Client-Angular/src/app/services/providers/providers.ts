import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/providers.interface';

/**
 * Servicio encargado de la gestión de proveedores.
 *
 * Proporciona métodos para obtener información de proveedores
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private providersService: ProvidersService) {}
 *
 * this.providersService.getAllProviders(10).subscribe(providers => {
 *   console.log(providers);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ProvidersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de provideros desde el backend.
   *
   * @param countProviders Número de provideros a obtener.
   * @returns Observable que emite un array de provideros.
   *
   * @example
   * ```ts
   * this.providersService.getAllProviders(5).subscribe(providers => {
   *   console.log(providers);
   * });
   * ```
   */
  getAllProviders(countProviders: number): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(`api/providers/${countProviders}`);
  }
}
