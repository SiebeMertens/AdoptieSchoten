import { Component } from '@angular/core';

@Component({
  selector: 'app-adoption-procedure',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <!-- <div class="page-header">
          <h1>Adoptieprocedure</h1>
          <p class="subtitle">Hoe adopteert u een dier?</p>
        </div> -->
        
        <!-- Video Section -->
        <div class="video-section">
          <h2 class="section-title">Bekijk onze adoptieprocedure</h2>
          <div class="video-container">
            <video controls class="adoption-video">
              <source src="/adoptie.mp4" type="video/mp4">
              Je browser ondersteunt de HTML5 video tag niet. Gelieve een moderne browser te gebruiken.
            </video>
          </div>
        </div>

        <!-- Steps Section -->
        <div class="steps-section">
          <h2 class="section-title">Stappen van het proces</h2>
          <div class="steps-grid">
            <div class="step-item">
              <div class="step-number">1</div>
              <h3>Dier uitkiezen</h3>
              <p>Blader door onze beschikbare dieren en vind de die bij u past.</p>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <h3>Aanvraag indienen</h3>
              <p>Vul ons adoptieanvraagformulier in en vertel ons over jezelf.</p>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <h3>Kennismaking</h3>
              <p>Maak kennis met onze lieve viervoeters (neem ook je eigen hond mee)</p>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <h3>Huisbezoek</h3>
              <p>Wij voeren een huisbezoek uit om beide partijen te beschermen.</p>
            </div>
            <div class="step-item">
              <div class="step-number">5</div>
              <h3>Welkom thuis!</h3>
              <p>Het dier verhuist naar zijn nieuwe liefdevol thuis!</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="contact-cta">
          <h2>Klaar om te adopteren?</h2>
          <p>Neem contact met ons op om het proces te starten.</p>
          <div class="cta-buttons">
            <a href="tel:03.658.95.76" class="btn btn-primary">Bel ons</a>
            <a href="mailto:dierenasielschoten@gmail.com" class="btn btn-secondary">Email ons</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { --color-primary: #61C1C7; --color-secondary: #47B3F1; --color-tertiary: #A0C531; --color-white: #FFFFFF; --color-dark: #1a1a1a; --color-light: #f8f9fa; --color-gray: #666666; }
    .page-wrapper { display: flex; flex-direction: column; height: calc(100vh - 70px); background: linear-gradient(135deg, var(--color-light) 0%, #e8f0f7 100%); overflow: auto; }
    .page-container { max-width: 1400px; width: 100%; margin: 0 auto; padding: 20px 25px; flex: 1; display: flex; flex-direction: column; }
    .page-header { margin-bottom: 15px; text-align: center; }
    h1 { font-size: 2rem; color: var(--color-tertiary); margin: 0 0 5px 0; font-weight: 800; }
    .subtitle { font-size: 1rem; color: var(--color-gray); margin: 0; font-weight: 300; }
    
    .video-section { margin-bottom: 20px; flex-shrink: 1; min-height: auto; }
    .section-title { font-size: 1.6rem; font-weight: 700; color: var(--color-dark); text-align: center; margin: 0 0 15px 0; }
    .video-container { position: relative; width: 100%; max-width: 800px; margin: 0 auto; background: var(--color-white); border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); overflow: hidden; }
    .adoption-video { width: 100%; height: auto; display: block; background: #000; max-height: 350px; object-fit: cover; }
    
    .steps-section { margin-bottom: 20px; flex-shrink: 0; }
    .steps-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin: 15px 0; }
    .step-item { background: var(--color-white); padding: 18px 15px; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); transition: all 0.3s ease; display: flex; flex-direction: column; }
    .step-item:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); }
    .step-number { display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--color-tertiary) 0%, var(--color-primary) 100%); color: var(--color-white); font-size: 1.5rem; font-weight: 700; margin: 0 auto 10px; flex-shrink: 0; }
    .step-item h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-dark); margin: 5px 0 8px 0; }
    .step-item p { font-size: 0.85rem; color: var(--color-gray); line-height: 1.5; margin: 0; flex-grow: 1; }
    
    .contact-cta { background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); padding: 25px 30px; border-radius: 12px; text-align: center; margin-top: 0; flex-shrink: 0; }
    .contact-cta h2 { font-size: 1.5rem; color: var(--color-white); margin: 0 0 8px 0; font-weight: 700; }
    .contact-cta p { font-size: 0.95rem; color: rgba(255, 255, 255, 0.9); margin: 0 0 15px 0; }
    
    .cta-buttons { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 10px 25px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease; cursor: pointer; }
    .btn-primary { background: var(--color-white); color: var(--color-primary); }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); }
    .btn-secondary { background: rgba(255, 255, 255, 0.2); color: var(--color-white); border: 2px solid var(--color-white); }
    .btn-secondary:hover { background: var(--color-white); color: var(--color-primary); }
    
    @media (max-width: 1400px) { 
      .steps-grid { grid-template-columns: repeat(4, 1fr); gap: 12px; }
      .page-container { padding: 15px 20px; }
    }
    @media (max-width: 1024px) { 
      .steps-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
    }
    @media (max-width: 768px) { 
      .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .section-title { font-size: 1.3rem; }
      .contact-cta { padding: 20px; }
      .contact-cta h2 { font-size: 1.2rem; }
    }
    @media (max-width: 480px) {
      .steps-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AdoptionProcedureComponent { }
