import { ComponentFixture, TestBed } from '@angular/core/testing';
// Compoenents
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display the title "Welcome to Escape from Decisions!"`, () => {
    const titleElement = fixture.debugElement.query(By.css('[data-testid="header-title"]'));
    expect(titleElement.nativeElement.textContent).toEqual(component.headerTitle());
  });
});
