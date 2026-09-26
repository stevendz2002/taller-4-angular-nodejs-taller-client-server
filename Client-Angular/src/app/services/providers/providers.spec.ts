import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Provider } from '../../interfaces/providers.interface';
import { providersMock } from '../../mocks/providers.mocks';
import { ProvidersService } from './providers';

describe('ProvidersService', () => {
  let service: ProvidersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ProvidersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllProviders', () => {
  
    it('debería realizar una petición GET y retornar una lista de proveedores', () => {
      const countProviders = 5;
      const mockProviders: Provider[] = providersMock;

      service.getAllProviders(countProviders).subscribe((providers) => {
        expect(providers).toEqual(mockProviders);
        expect(providers.length).toBe(mockProviders.length);
      });

      const req = httpMock.expectOne(`api/providers/${countProviders}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProviders);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countProviders = 3;

      service.getAllProviders(countProviders).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/providers/${countProviders}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  
  });

});
