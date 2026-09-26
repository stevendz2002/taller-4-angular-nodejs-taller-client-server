import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersService } from '../../services/orders/orders.service';
import { OrdersPage } from './orders.page';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPage, OrdersTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar', () => {
    const spyGetAllOrders = jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllOrders).toHaveBeenCalled();
  });

  it('debería asignar las órdenes recibidas del servicio', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(component.orders).toEqual(ORDERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería pasar las órdenes al componente orders-table', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(OrdersTableComponent))
      .componentInstance;
    expect(tableComponent.orders).toEqual(ORDERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllOrders', () => {
    component.orders = [];
    const errorResponse = new Error('Error al cargar órdenes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.orders.length).toBe(0);
    expect(component.state).toBe('error');
  });
});

