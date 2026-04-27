import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Sponsors</h1>
      <p>Onze sponsors en partners.</p>
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
export class SponsorsComponent { }
