import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Ticket } from '../../interfaces/tickets.interface';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { TicketsService } from './tickets.service';

describe('TicketsService', () => {
  let service: TicketsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(TicketsService);
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

  describe('getAllTickets', () => {

    it('debería realizar una petición GET y retornar una lista de tickets', () => {
      const countTickets = 3;
      const mockTickets: Ticket[] = TICKETS_MOCK;

      service.getAllTickets(countTickets).subscribe((tickets) => {
        expect(tickets).toEqual(mockTickets);
        expect(tickets.length).toBe(mockTickets.length);
      });

      const req = httpMock.expectOne(`api/tickets/${countTickets}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockTickets);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countTickets = 5;

      service.getAllTickets(countTickets).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/tickets/${countTickets}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

    it('debería realizar la petición a la URL correcta', () => {
      const countTickets = 10;

      service.getAllTickets(countTickets).subscribe();

      const req = httpMock.expectOne(`api/tickets/${countTickets}`);
      expect(req.request.url).toBe(`api/tickets/${countTickets}`);
      req.flush([]);
    });

  });

});
