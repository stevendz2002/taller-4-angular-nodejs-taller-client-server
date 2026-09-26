import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TICKETS_MOCK } from '../../mocks/tickets.mocks';
import { TicketsTableComponent } from './tickets-table.component';

describe('TicketsTableComponent', () => {
  let component: TicketsTableComponent;
  let fixture: ComponentFixture<TicketsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsTableComponent);
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

  it('debería renderizar una fila por cada ticket', () => {
    component.tickets = TICKETS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.tickets.length);
  });

  it('debería mostrar los datos del ticket en cada columna', () => {
    component.tickets = TICKETS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const ticket = component.tickets[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(ticket.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(ticket.subject);
      expect(columns[2].nativeElement.textContent.trim()).toBe(ticket.assigned_to);
      expect(columns[5].nativeElement.textContent.trim()).toBe(ticket.date);
    });
  });

  it('debería mapear cada prioridad a su BadgeType correcto', () => {
    expect(component.priorityMap['Baja']).toBe('secondary');
    expect(component.priorityMap['Media']).toBe('primary');
    expect(component.priorityMap['Alta']).toBe('warning');
    expect(component.priorityMap['Crítica']).toBe('danger');
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Abierto']).toBe('danger');
    expect(component.statusMap['En Progreso']).toBe('primary');
    expect(component.statusMap['En Revisión']).toBe('warning');
    expect(component.statusMap['Resuelto']).toBe('success');
    expect(component.statusMap['Cerrado']).toBe('secondary');
  });

  it('debería mostrar una tabla vacía si no se pasan tickets', () => {
    component.tickets = [];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(0);
  });

});
