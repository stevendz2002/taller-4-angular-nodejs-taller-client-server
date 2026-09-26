import { CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersTableComponent } from './orders-table.component';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada orden', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.orders.length);
  });

  it('debería mostrar los datos de la orden en cada columna', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const order = component.orders[index];
      const totalFormatted = new CurrencyPipe('en-US').transform(order.totalAmount);
      const dateFormatted = new DatePipe('en-US').transform(order.createdAt, 'short');

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(order.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(order.userName);
      expect(columns[2].nativeElement.textContent.trim()).toContain(order.userId);
      expect(columns[4].nativeElement.textContent.trim()).toBe(totalFormatted);
      expect(columns[5].nativeElement.textContent.trim()).toBe(order.status);
      expect(columns[6].nativeElement.textContent.trim()).toBe(dateFormatted);
    });
  });

  it('debería mapear cada estado de orden a su BadgeType correcto', () => {
    expect(component.statusMap['PENDING']).toBe('warning');
    expect(component.statusMap['PROCESSING']).toBe('primary');
    expect(component.statusMap['COMPLETED']).toBe('success');
    expect(component.statusMap['CANCELLED']).toBe('danger');
  });
});

