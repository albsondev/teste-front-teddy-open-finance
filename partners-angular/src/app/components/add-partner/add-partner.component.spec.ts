import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPartnerComponent } from './add-partner.component';
import { PartnerService } from '../../services/partner.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MaterialModule  } from '../../material.module';
import { FormsModule } from '@angular/forms';


describe('AddPartnerComponent', () => {
  let component: AddPartnerComponent;
  let fixture: ComponentFixture<AddPartnerComponent>;
  let partnerServiceSpy: jasmine.SpyObj<PartnerService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    // Criando espiões para os serviços usados no componente
    partnerServiceSpy = jasmine.createSpyObj('PartnerService', ['addPartner']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [AddPartnerComponent],
      imports: [NoopAnimationsModule, MatSnackBarModule, MatFormFieldModule, MaterialModule, FormsModule ],
      providers: [
        { provide: PartnerService, useValue: partnerServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add partner successfully and navigate to dashboard', () => {
    partnerServiceSpy.addPartner.and.returnValue(of({}));

    component.addPartner();

    expect(partnerServiceSpy.addPartner).toHaveBeenCalledWith(component.partner);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Parceiro adicionado com sucesso!', 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should show error message when adding partner fails', () => {
    // Mocka o retorno do serviço para simular erro
    partnerServiceSpy.addPartner.and.returnValue(throwError(() => new Error('Erro')));

    component.addPartner();

    expect(partnerServiceSpy.addPartner).toHaveBeenCalledWith(component.partner);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Erro ao adicionar parceiro. Tente novamente.', 'Fechar', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  });
});
