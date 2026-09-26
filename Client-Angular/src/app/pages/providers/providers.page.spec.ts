import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersPage } from './providers.page';
import { provideHttpClient } from '@angular/common/http';
import { ProvidersService } from '../../services/providers/providers';
import { ProvidersTableComponent } from '../../components/providers-table/providers-table';
import { of, throwError } from 'rxjs';
import { providersMock } from '../../mocks/providers.mocks';
import { By } from '@angular/platform-browser';

describe('ProvidersPage', () => {
  let component: ProvidersPage;
  let fixture: ComponentFixture<ProvidersPage>;
  let providersService: ProvidersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersPage, ProvidersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersPage);
    component = fixture.componentInstance;
    providersService = TestBed.inject(ProvidersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllProviders al iniciar', () => {
    const spyGetAllProviders = jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(providersMock));
    fixture.detectChanges();
    expect(spyGetAllProviders).toHaveBeenCalled();
  });

  it('debería asignar los provideros recibidos del servicio', () => {
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(providersMock));
    fixture.detectChanges();
    expect(component.providers).toEqual(providersMock);
  });

  it('debería pasar los provideros al componente providers-table', () => {
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(of(providersMock));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ProvidersTableComponent))
      .componentInstance;
    expect(tableComponent.providers).toEqual(providersMock);
  });

  it('debería manejar el error cuando falla getAllProviders', () => {
    component.providers = [];
    const errorResponse = new Error('Error al cargar provideros');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(providersService, 'getAllProviders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(providersService.getAllProviders).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.providers.length).toBe(0);
  });
});
