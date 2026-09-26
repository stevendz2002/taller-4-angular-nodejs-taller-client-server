import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { providersMock } from '../../mocks/providers.mocks';
import { ProvidersTableComponent} from './providers-table';

describe('ProvidersTableComponent', () => {
  let component: ProvidersTableComponent;
  let fixture: ComponentFixture<ProvidersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersTableComponent);
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

  it('debería renderizar una fila por cada proveedor', () => {
    component.providers = providersMock;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.providers.length);
  });

  it('debería mostrar los datos del proveedor en cada columna', () => {
    component.providers = providersMock;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const provider = component.providers[index];
      const providerPrice = new CurrencyPipe('en-US').transform(provider.price);
      const providerContact = provider.contact ? provider.contact : 'N/A';
      const providerCategory = component.categoryMap[provider.category];
      const providerEmail = provider.email ? provider.email : 'N/A';
      const providerPhone = provider.phone ? provider.phone : 'N/A';
      

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(provider.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(provider.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(providerContact);
      expect(columns[3].nativeElement.textContent.trim()).toBe(providerPhone);
      expect(columns[4].nativeElement.textContent.trim()).toBe(providerEmail);
      expect(columns[5].nativeElement.textContent.trim()).toBe(providerPrice);
      expect(columns[6].nativeElement.querySelector('.badge').textContent.trim()).toBe(provider.category);
      expect(columns[6].nativeElement.querySelector('.badge').classList).toContain(`bg-${providerCategory}`);
      
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.categoryMap['Tecnología']).toBe('primary');
    expect(component.categoryMap['Alimentos']).toBe('success');
    expect(component.categoryMap['Logística']).toBe('warning');
    expect(component.categoryMap['Servicios']).toBe('info');
  });
});
