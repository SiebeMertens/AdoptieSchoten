import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>Onze Trotse Sponsors</h1>

        </div>

        <!-- Sponsors Section -->
        <section class="sponsors-section">

          <div class="sponsors-grid">
            <!-- Maxizoo -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/maxizoo_logo.png" alt="Maxizoo logo">
              </div>
              <h3>Maxizoo</h3>
            </div>

            <!-- Kaaspoort -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/kaaspoort_logo.png" alt="Kaaspoort logo">
              </div>
              <h3>Kaaspoort</h3>
            </div>

            <!-- Uitvaartverzorging Van Staey-Leurs -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/uitvaart_logo.png" alt="Uitvaartverzorging Van Staey-Leurs logo">
              </div>
              <h3>Uitvaartverzorging Van Staey-Leurs</h3>
            </div>

            <!-- Atelier Co-Pains -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/Copains_logo.png" alt="Atelier Co-Pains logo">
              </div>
              <h3>Atelier Co-Pains</h3>
            </div>

            <!-- Het Natuurhuis -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/Hetnatuurhuis_logo.png" alt="Het Natuurhuis logo">
              </div>
              <h3>Het Natuurhuis</h3>
            </div>

            <!-- Carrefour Express Schoten -->
            <div class="sponsor-card">
              <div class="sponsor-logo">
                <img src="/sponsors/carrefour_logo.png" alt="Carrefour Express Schoten logo">
              </div>
              <h3>Carrefour Express Schoten</h3>
            </div>
          </div>

          <!-- Thank You Section -->
          <div class="thank-you-section">
            <p>Dank je wel aan al onze partners voor hun steun en inzet voor ons dierenasiel! 💛</p>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    :host { --color-primary: #61C1C7; --color-secondary: #47B3F1; --color-tertiary: #A0C531; --color-white: #FFFFFF; --color-dark: #1a1a1a; --color-light: #f8f9fa; --color-gray: #666666; }
    .page-wrapper { display: flex; flex-direction: column; min-height: calc(100vh - 70px); background: linear-gradient(135deg, var(--color-light) 0%, #e8f0f7 100%); }
    .page-container { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 30px; display: flex; flex-direction: column; }
    
    .page-header { margin-bottom: 40px; text-align: center; }
    h1 { font-size: 2.8rem; color: var(--color-tertiary); margin: 0 0 10px 0; font-weight: 800; }
    .subtitle { font-size: 1.1rem; color: var(--color-gray); margin: 0; font-weight: 400; }
    
    .sponsors-section { background: var(--color-white); border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
    .section-title { font-size: 2rem; color: var(--color-tertiary); text-align: center; margin: 0 0 35px 0; font-weight: 700; letter-spacing: 1px; }
    
    .sponsors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
    .sponsor-card { background: var(--color-light); padding: 30px; border-radius: 12px; text-align: center; transition: all 0.3s ease; border: 2px solid transparent; }
    .sponsor-card:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12); border-color: var(--color-primary); }
    
    .sponsor-logo { display: flex; align-items: center; justify-content: center; height: 150px; margin-bottom: 20px; }
    .sponsor-logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
    
    .sponsor-card h3 { font-size: 1.2rem; color: var(--color-dark); margin: 0; font-weight: 700; line-height: 1.4; }
    
    .thank-you-section { background: linear-gradient(135deg, rgba(97, 193, 199, 0.1) 0%, rgba(160, 197, 49, 0.1) 100%); border-left: 5px solid var(--color-primary); padding: 25px; border-radius: 10px; text-align: center; }
    .thank-you-section p { font-size: 1.1rem; color: var(--color-dark); margin: 0; font-weight: 500; line-height: 1.6; }
    
    @media (max-width: 1024px) {
      .sponsors-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }
      .page-container { padding: 30px 20px; }
    }
    
    @media (max-width: 768px) {
      .sponsors-grid { grid-template-columns: 1fr; gap: 20px; }
      .sponsors-section { padding: 25px; }
      .page-container { padding: 20px 15px; }
      h1 { font-size: 2.2rem; }
      .section-title { font-size: 1.6rem; margin-bottom: 25px; }
      .sponsor-card { padding: 20px; }
      .sponsor-logo { height: 120px; }
    }
  `]
})
export class SponsorsComponent { }
