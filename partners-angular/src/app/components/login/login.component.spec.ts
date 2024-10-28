import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store username in cookies when stayConnected is true', () => {
    spyOnProperty(document, 'cookie', 'set').and.callFake(() => {});

    component.username = 'testUser';
    component.stayConnected = true;

    component.login();

    expect(document.cookie).toContain('username=testUser');
    expect(localStorage.getItem('username')).toBeNull(); // Deve estar vazio
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should store username in localStorage when stayConnected is false', () => {
    spyOn(localStorage, 'setItem');

    component.username = 'testUser';
    component.stayConnected = false;

    component.login();

    expect(localStorage.setItem).toHaveBeenCalledWith('username', 'testUser');
    expect(document.cookie).toBe(''); // Não deve ter cookie
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should navigate to dashboard', () => {
    component.username = 'testUser';
    component.password = 'testPassword';
    component.stayConnected = false;

    component.login();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
