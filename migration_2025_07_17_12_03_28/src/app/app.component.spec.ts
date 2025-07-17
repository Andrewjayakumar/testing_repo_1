import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Other tests using TestBed.inject() as needed
  it('should use TestBed.inject for dependency retrieval', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const injected = TestBed.inject(AppComponent);
    expect(injected).toEqual(app);
  });
});
