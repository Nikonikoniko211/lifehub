import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>LifeHub</h1>
    <p>{{ message() }}</p>
  `,
})
export class AppComponent {
  private http = inject(HttpClient);
  message = signal('Loading...');

  constructor() {
    this.http
      .get<{ message: string }>('http://localhost:8080/api/hello')
      .subscribe({
        next: (response) => this.message.set(response.message),
        error: () => this.message.set('Could not reach the API'),
      });
  }
}