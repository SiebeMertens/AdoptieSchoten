import { Component } from '@angular/core';

@Component({
  selector: 'app-trooper',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>TROOPER</h1>
      <p>Informatie over TROOPER.</p>
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
export class TrooperComponent { }
