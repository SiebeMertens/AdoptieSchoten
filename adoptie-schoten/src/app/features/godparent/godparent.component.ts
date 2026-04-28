import { Component } from '@angular/core';

@Component({
  selector: 'app-godparent',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <!-- Header -->
        <div class="page-header">
          <h1>Meter-Peterschap</h1>
          <p class="subtitle">Wees de meter of peter van een dier</p>
        </div>

        <!-- Intro Section
        <section class="support-section intro-section">
          <p class="intro-text">
            We hebben in ons dierenasiel veel poezen en honden. Er zijn er die wachten op een nieuwe thuis, maar er zijn er ook die bij ons langer zullen blijven, sommigen door hun leeftijd, anderen om medische aandoeningen en sommigen hebben al zoveel meegemaakt dat een herplaatsing niet gemakkelijk is.
          </p>
          <p class="intro-text">
            Jouw steun is essentieel voor ons. Hieronder vind je meer informatie over het meter/peterschap programma! 💛
          </p>
        </section> -->

        <!-- Main Meter/Peterschap Section -->
        <section class="support-section">
          <div class="section-header">
            <h2>🐾 Word Meter of Peter</h2>
            <p class="section-description">Help ons dieren met voeding en medische zorgen</p>
          </div>
          <div class="section-content">
            <p>Wil jij deze poezen en honden helpen? Dan kan je dit doen door van één van deze verblijven het meter/peterschap op je te nemen. Door je meter/peterschap help je het dier dat in dat hokje verblijft met voeding en medische zorgen.</p>
            <p><strong>Je kan een meter/peterschap voor één jaar op jou nemen. Er zijn 2 mogelijkheden:</strong></p>
            
            <div class="options-grid">
              <div class="option-card">
                <div class="option-icon">🐱</div>
                <h3>Poezenverblijf</h3>
                <div class="pricing">
                  <p><strong>€12,50/maand</strong></p>
                  <p>of</p>
                  <p><strong>€150/jaar</strong></p>
                </div>
                <p class="option-note">Je naam wordt vermeld in het poezenverblijf</p>
              </div>
              <div class="option-card">
                <div class="option-icon">🐕</div>
                <h3>Hondenverblijf</h3>
                <div class="pricing">
                  <p><strong>€15/maand</strong></p>
                  <p>of</p>
                  <p><strong>€180/jaar</strong></p>
                </div>
                <p class="option-note">Je naam wordt vermeld in het hondenverblijf</p>
              </div>
            </div>

            <div class="bank-section">
              <p><strong>Heb je interesse om meter of peter te worden?</strong></p>
              <p>Dit kan door een overschrijving te maken op:</p>
              <div class="bank-info">
                <p class="bank-account">Fortis BE15 220-0412438-30</p>
                <p class="bank-note">met de vermelding van "meter" of "peterschap"</p>
              </div>
              <p class="thank-you">We danken u alvast voor jullie steun! 💛</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    :host { --color-primary: #61C1C7; --color-secondary: #47B3F1; --color-tertiary: #A0C531; --color-white: #FFFFFF; --color-dark: #1a1a1a; --color-light: #f8f9fa; --color-gray: #666666; --color-text: #333; }
    .page-wrapper { display: flex; flex-direction: column; min-height: calc(100vh - 70px); background: linear-gradient(135deg, var(--color-light) 0%, #e8f0f7 100%); }
    .page-container { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 30px; flex: 1; display: flex; flex-direction: column; }
    
    .page-header { margin-bottom: 30px; text-align: center; }
    h1 { font-size: 2.8rem; color: var(--color-tertiary); margin: 0 0 10px 0; font-weight: 800; }
    .subtitle { font-size: 1.1rem; color: var(--color-gray); margin: 0; font-weight: 400; }
    
    .support-section { background: var(--color-white); border-radius: 12px; padding: 30px; margin-bottom: 25px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
    
    .intro-section { background: linear-gradient(135deg, rgba(97, 193, 199, 0.1) 0%, rgba(71, 179, 241, 0.1) 100%); border-left: 5px solid var(--color-primary); }
    .intro-text { font-size: 1.05rem; line-height: 1.7; color: var(--color-dark); margin: 0 0 15px 0; }
    
    .section-header { margin-bottom: 20px; }
    .section-header h2 { font-size: 2rem; color: var(--color-tertiary); margin: 0 0 8px 0; font-weight: 700; }
    .section-description { font-size: 0.95rem; color: var(--color-gray); margin: 0; font-style: italic; }
    
    .section-content { font-size: 1rem; line-height: 1.7; color: #444; }
    .section-content p { margin: 12px 0; }
    .section-content strong { color: var(--color-dark); }
    
    .options-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
    .option-card { background: var(--color-light); padding: 20px; border-radius: 10px; text-align: center; border: 2px solid transparent; transition: all 0.3s ease; }
    .option-card:hover { border-color: var(--color-primary); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }
    .option-icon { font-size: 2.5rem; display: block; margin-bottom: 10px; }
    .option-card h3 { font-size: 1.3rem; color: var(--color-dark); margin: 8px 0; font-weight: 700; }
    .pricing { margin: 12px 0; }
    .pricing p { margin: 4px 0; font-size: 0.95rem; }
    .pricing p strong { font-size: 1.2rem; color: var(--color-tertiary); }
    .option-note { font-size: 0.9rem; color: var(--color-gray); margin-top: 10px; }
    
    .bank-section { background: rgba(160, 197, 49, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid var(--color-tertiary); }
    .bank-info { background: rgba(255, 255, 255, 0.6); padding: 15px; border-radius: 8px; margin: 12px 0; }
    .bank-account { font-size: 1.1rem; color: var(--color-dark); margin: 0; font-weight: 700; font-family: 'Courier New', monospace; letter-spacing: 1px; }
    .bank-note { font-size: 0.95rem; color: var(--color-gray); margin: 6px 0 0 0; }
    .thank-you { font-size: 1rem; color: var(--color-dark); margin: 15px 0 0 0; font-weight: 600; }
    
    @media (max-width: 900px) {
      .page-container { padding: 30px 20px; }
      h1 { font-size: 2.2rem; }
      .support-section { padding: 20px; }
      .options-grid { grid-template-columns: 1fr; }
    }
    
    @media (max-width: 600px) {
      .page-container { padding: 20px 15px; }
      h1 { font-size: 1.8rem; }
      .section-header h2 { font-size: 1.5rem; }
      .support-section { padding: 15px; margin-bottom: 15px; }
    }
  `]
})
export class GodparentComponent { }
