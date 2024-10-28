import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPartnerComponent } from './edit-partner.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService } from '../../services/partner.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('EditPartnerComponent', () => {
  let component: EditPartnerComponent;
  let fixture: ComponentFixture<EditPartnerComponent>;
  let partnerServiceSpy: jasmine.SpyObj<PartnerService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: { paramMap: { get: jasmine.createSpy().and.returnValue('1') } }
    };

    partnerServiceSpy = jasmine.createSpyObj('PartnerService', ['getPartners', 'updatePartner']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [EditPartnerComponent],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: PartnerService, useValue: partnerServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPartnerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize partner on ngOnInit', () => {
    const mockPartner = { id: '1', name: 'Parceiro Teste', service: 'Serviço Teste' };
    partnerServiceSpy.getPartners.and.returnValue(of([mockPartner]));

    fixture.detectChanges();

    expect(partnerServiceSpy.getPartners).toHaveBeenCalled();
    expect(component.partner).toEqual(mockPartner);
  });

  it('should update partner and navigate to dashboard on successful submit', () => {
    const mockPartner = { id: '1', name: 'Parceiro Atualizado', service: 'Serviço Atualizado' };
    partnerServiceSpy.updatePartner.and.returnValue(of(mockPartner));

    component.partner = mockPartner;
    component.onSubmit();

    expect(partnerServiceSpy.updatePartner).toHaveBeenCalledWith('1', mockPartner);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Parceiro atualizado com sucesso!', 'Fechar', { duration: 3000 });
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should show error message on failed submit', () => {
    partnerServiceSpy.updatePartner.and.returnValue(throwError('error'));

    component.partner = { id: '1', name: 'Parceiro com erro', service: 'Serviço com erro' };
    component.onSubmit();

    expect(partnerServiceSpy.updatePartner).toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith('Erro ao atualizar parceiro. Tente novamente.', 'Fechar', { duration: 3000 });
  });

  it('should show error message if no partner ID found on submit', () => {
    const activatedRouteStub = TestBed.inject(ActivatedRoute);
    spyOn(activatedRouteStub.snapshot.paramMap, 'get').and.returnValue(null);

    component.onSubmit();

    expect(snackBarSpy.open).toHaveBeenCalledWith('Erro: ID do parceiro não encontrado.', 'Fechar', { duration: 3000 });
    expect(partnerServiceSpy.updatePartner).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
