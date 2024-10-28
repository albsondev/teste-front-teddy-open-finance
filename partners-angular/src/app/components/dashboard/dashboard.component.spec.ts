import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { PartnerService } from '../../services/partner.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let partnerServiceSpy: jasmine.SpyObj<PartnerService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    partnerServiceSpy = jasmine.createSpyObj('PartnerService', ['getPartners', 'deletePartner']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PartnerService]
    });

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: PartnerService, useValue: partnerServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load partners on initialization', () => {
    const mockPartners = [{ id: '1', name: 'Partner A', service: 'Service A' }];
    partnerServiceSpy.getPartners.and.returnValue(of(mockPartners));

    component.ngOnInit();

    expect(partnerServiceSpy.getPartners).toHaveBeenCalled();
    expect(component.partners).toEqual(mockPartners);
  });

  it('should show an error message if loading partners fails', () => {
    partnerServiceSpy.getPartners.and.returnValue(throwError(() => new Error('Erro')));

    component.ngOnInit();

    expect(snackBarSpy.open).toHaveBeenCalledWith('Erro ao carregar parceiros.', 'Fechar', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  });

  it('should delete a partner and show success message', () => {
    const mockPartners = [{ id: '1', name: 'Partner A', service: 'Service A' }];
    component.partners = mockPartners;
    partnerServiceSpy.deletePartner.and.returnValue(of({}));

    component.deletePartner('1');

    expect(partnerServiceSpy.deletePartner).toHaveBeenCalledWith('1');
    expect(component.partners.length).toBe(0);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Parceiro deletado com sucesso!', 'Fechar', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  });

  it('should show an error message if deleting a partner fails', () => {
    partnerServiceSpy.deletePartner.and.returnValue(throwError(() => new Error('Erro')));

    component.deletePartner('1');

    expect(snackBarSpy.open).toHaveBeenCalledWith('Erro ao deletar parceiro.', 'Fechar', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  });

  it('should navigate to edit partner page', () => {
    component.editPartner('1');

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/edit-partner', '1']);
  });

  it('should logout and navigate to login page using localStorage.clear', () => {
    const router = TestBed.inject(Router);
    localStorage.setItem('username', 'testUser'); // Define um valor para limpar
    spyOn(localStorage, 'removeItem'); // Espia o removeItem
    spyOn(component, 'clearCookies'); // Espia o clearCookies
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    component.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('username');
    expect(component.clearCookies).toHaveBeenCalled();
  });
});
