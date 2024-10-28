import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Sobre a Aplicação" as title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain('Sobre a Aplicação');
  });

  it('should render the main application description', () => {
    const descriptionElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(descriptionElement.textContent).toContain('Descrição da Aplicação - Sistema de Cadastro e Gerenciamento de Parceiros');
  });

  it('should list the main system objectives', () => {
    const objectivesList = fixture.debugElement.queryAll(By.css('ul li'));
    expect(objectivesList.length).toBeGreaterThan(0);
    expect(objectivesList[0].nativeElement.textContent).toContain('Cadastrar novos parceiros');
  });

  it('should display technologies used', () => {
    const techSection = fixture.debugElement.query(By.css('h3'));
    expect(techSection.nativeElement.textContent).toContain('Tecnologias Utilizadas');
  });
});
