import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsPage } from './tickets.page';
import { provideHttpClient } from '@angular/common/http';
import { TicketsService } from '../../services/tickets/tickets.service';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { of, throwError } from 'rxjs';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { By } from '@angular/platform-browser';

describe('TicketsPage', () => {
  let component: TicketsPage;
  let fixture: ComponentFixture<TicketsPage>;
  let ticketsService: TicketsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsPage, TicketsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsPage);
    component = fixture.componentInstance;
    ticketsService = TestBed.inject(TicketsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTickets al iniciar', () => {
    const spyGetAllTickets = jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllTickets).toHaveBeenCalled();
  });

  it('debería asignar los tickets recibidos del servicio', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();
    expect(component.tickets).toEqual(TICKETS_MOCK);
  });

  it('debería establecer el estado en "success" tras carga exitosa', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();
    expect(component.state).toBe('success');
  });

  it('debería pasar los tickets al componente tickets-table', () => {
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(of(TICKETS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TicketsTableComponent))
      .componentInstance;
    expect(tableComponent.tickets).toEqual(TICKETS_MOCK);
  });

  it('debería manejar el error cuando falla getAllTickets', () => {
    component.tickets = [];
    const errorResponse = new Error('Error al cargar tickets');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ticketsService.getAllTickets).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.tickets.length).toBe(0);
  });

  it('debería establecer el estado en "error" si falla la carga', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ticketsService, 'getAllTickets').mockReturnValue(
      throwError(() => new Error('Error de red'))
    );
    fixture.detectChanges();
    expect(component.state).toBe('error');
  });

});
