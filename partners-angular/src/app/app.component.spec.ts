import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') } // Mock do Router
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout and navigate to login', () => {
    spyOn(localStorage, 'removeItem'); // Spy na função removeItem do localStorage
    
    // Mock de document.cookie
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: ''
    });

    component.logout(); // Chama o método logout
  
    expect(localStorage.removeItem).toHaveBeenCalledWith('username');

    // Verifica se o cookie foi definido corretamente para logout
    expect(document.cookie).toContain('username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');

    // Verifica se o router.navigate foi chamado para redirecionar para '/login'
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should render the navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('nav ul li a'));
    expect(navLinks.length).toBe(5); // Verifica se há 5 links no nav

    expect(navLinks[0].nativeElement.textContent).toContain('Home');
    expect(navLinks[1].nativeElement.textContent).toContain('Dashboard');
    expect(navLinks[2].nativeElement.textContent).toContain('Cadastrar Parceiro');
    expect(navLinks[3].nativeElement.textContent).toContain('Empresas Externas');
    expect(navLinks[4].nativeElement.textContent).toContain('Sobre');
  });

  it('should have a logout button', () => {
    const logoutButton = fixture.debugElement.query(By.css('button'));
    expect(logoutButton).toBeTruthy(); // Verifica se o botão existe
  });
});
