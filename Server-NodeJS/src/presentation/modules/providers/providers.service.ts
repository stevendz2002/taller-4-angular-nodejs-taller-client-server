import { faker } from '@faker-js/faker';
import { Provider, ProviderCategory } from '../../../domain/interfaces/provider.interface';

/**
 * Servicio encargado de la generación y gestión de proveedores.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar proveedores
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class ProvidersService {

  /**
   * Categorías disponibles para los proveedores.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada proveedor generado.
   */
  private categories: ProviderCategory[] = [
    'Tecnología',
    'Alimentos',
    'Logística',
    'Servicios'
  ];

  /**
   * Obtiene un listado de proveedores generados dinámicamente.
   *
   * @param countProviders Cantidad de proveedores a generar
   * @returns Promesa que resuelve un arreglo de proveedores
   *
   * @example
   * ```ts
   * const providers = await providersService.getAllProviders(10);
   * ```
   */
  public async getAllProviders(countProviders: number): Promise<Provider[]> {
    const providers: Promise<Provider>[] = [];

    for (let i = 1; i <= countProviders; i++) {
      providers.push(this.generateProvider(i));
    }

    return Promise.all(providers);
  }

  /**
   * Genera un proveedor ficticio.
   *
   * @param id Identificador único del proveedor
   * @returns Promesa que resuelve un proveedor generado
   */

  private generateProvider(id: number): Promise<Provider> {
    return Promise.resolve({
      id,
      name: faker.company.name(),
      contact: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      price: Number(
        faker.commerce.price({ min: 1, max: 100, dec: 2 })
      ),
      category: faker.helpers.arrayElement(this.categories),
    });
  }
}
