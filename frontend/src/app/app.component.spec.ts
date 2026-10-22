import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
    httpTestingController.expectOne('http://localhost:8080/api/hello').flush({ message: 'Hello' });
  });

  it('should render the LifeHub title and API response', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    httpTestingController.expectOne('http://localhost:8080/api/hello').flush({ message: 'Welcome' });
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('LifeHub');
    expect(compiled.querySelector('p')?.textContent).toContain('Welcome');
  });

  it('should show an error message when the API is unreachable', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    httpTestingController
      .expectOne('http://localhost:8080/api/hello')
      .error(new ProgressEvent('error'));
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Could not reach the API');
  });
});
