import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-certificate',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Fiscaal Attest</h1>
      <p>Informatie over ons fiscaal attest.</p>
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
export class TaxCertificateComponent { }
