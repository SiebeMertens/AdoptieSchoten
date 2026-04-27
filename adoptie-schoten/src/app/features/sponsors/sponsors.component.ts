import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>Sponsors</h1>
          <p class="subtitle">Onze sponsors en partners</p>
        </div>
        <div class="page-content">
          <p>Onze sponsors en partners.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper { display: flex; flex-direction: column; height: 100%; background: linear-gradient(135deg, #f8f9fa 0%, #e8f0f7 100%); }
    .page-container { max-width: 1200px; width: 100%; margin: 0 auto; padding: 60px 30px; flex: 1; display: flex; flex-direction: column; }
    .page-header { margin-bottom: 40px; }
    h1 { font-size: 2.5rem; color: #A0C531; margin: 0 0 15px 0; font-weight: 700; }
    .subtitle { font-size: 1.1rem; color: #666; margin: 0; }
    .page-content { font-size: 1rem; line-height: 1.6; color: #555; }
    @media (max-width: 768px) { .page-container { padding: 40px 20px; } h1 { font-size: 2rem; } }
  `]
})
export class SponsorsComponent { }
