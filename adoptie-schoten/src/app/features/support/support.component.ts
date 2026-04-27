import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Steun Ons</h1>
      <p>Informatie over doneren en ondersteunen.</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #A0C531;
      margin-bottom: 20px;
    }
  `]
})
export class SupportComponent { }
