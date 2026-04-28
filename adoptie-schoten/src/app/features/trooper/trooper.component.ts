import { Component } from '@angular/core';

@Component({
  selector: 'app-trooper',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>TROOPER</h1>
        </div>

        <!-- Main Content Section -->
        <section class="trooper-section">
          <div class="content-box">
            
            <div class="text-content">
              <p>U kan <strong>Dierenasiel Schoten steunen</strong> door al uw dierbenodigdheden aan te schaffen via <a href="https://www.trooper.be/nl/trooperverenigingen/dierenasielschoten/" target="_blank" rel="noopener noreferrer" class="trooper-link">Trooper.be</a>.</p>

              <div class="instruction-box">
                <h3>Hoe werkt het?</h3>
                <ol class="instruction-list">
                  <li>U surft <strong>bij ELKE bestelling</strong> naar <a href="https://www.trooper.be" target="_blank" rel="noopener noreferrer" class="trooper-link">www.trooper.be</a></li>
                  <li>Vul <strong>Dierenasiel Schoten</strong> in</li>
                  <li>Zoek uw online winkel</li>
                  <li>Uw wordt doorverwezen nadat u uw gegevens hebt ingevuld</li>
                  <li>U ziet ook telkens <strong>welke winkel welke commissie aan ons geeft</strong></li>
                </ol>
              </div>

              <p class="benefit-text">
                Dit betekent voor Dierenasiel Schoten <strong>een broodnodig steuntje in de rug</strong> en u krijgt <strong>topkwaliteit dierbenodigdheden aan huis geleverd</strong>.
              </p>

              <p class="closing-text">
                Namens de dieren alvast hartelijk dank voor uw hulp!! 💛
              </p>
            </div>

            <!-- CTA Button -->
            <div class="cta-button">
              <a href="https://www.trooper.be/nl/trooperverenigingen/dierenasielschoten/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Ga naar Trooper.be
              </a>
            </div>
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
    
    .trooper-section { }
    .content-box { background: var(--color-white); border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
    .content-box h2 { font-size: 2rem; color: var(--color-tertiary); margin: 0 0 30px 0; font-weight: 700; text-align: center; }
    
    .text-content { font-size: 1.05rem; line-height: 1.8; color: #333; }
    .text-content p { margin: 0 0 20px 0; }
    .text-content strong { color: var(--color-dark); font-weight: 600; }
    
    .trooper-link { color: var(--color-secondary); text-decoration: none; font-weight: 600; transition: all 0.3s ease; border-bottom: 2px solid transparent; }
    .trooper-link:hover { color: var(--color-primary); border-bottom-color: var(--color-primary); }
    
    .instruction-box { background: linear-gradient(135deg, rgba(97, 193, 199, 0.1) 0%, rgba(71, 179, 241, 0.1) 100%); padding: 25px; border-radius: 10px; border-left: 5px solid var(--color-secondary); margin: 25px 0; }
    .instruction-box h3 { font-size: 1.3rem; color: var(--color-secondary); margin: 0 0 15px 0; font-weight: 700; }
    
    .instruction-list { margin: 0 0 0 20px; padding: 0; }
    .instruction-list li { margin: 10px 0; color: #333; line-height: 1.6; }
    .instruction-list strong { color: var(--color-dark); }
    
    .benefit-text { background: rgba(160, 197, 49, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid var(--color-tertiary); margin: 20px 0; font-weight: 500; }
    
    .closing-text { font-size: 1.1rem; color: var(--color-dark); font-weight: 600; text-align: center; margin: 25px 0 0 0; }
    
    .cta-button { text-align: center; margin-top: 30px; }
    .btn { display: inline-block; padding: 14px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; transition: all 0.3s ease; cursor: pointer; }
    .btn-primary { background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); color: var(--color-white); box-shadow: 0 4px 12px rgba(97, 193, 199, 0.3); }
    .btn-primary:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(97, 193, 199, 0.4); }
    
    @media (max-width: 900px) {
      .page-container { padding: 30px 20px; }
      .content-box { padding: 30px; }
      h1 { font-size: 2.2rem; }
    }
    
    @media (max-width: 600px) {
      .page-container { padding: 20px 15px; }
      .content-box { padding: 20px; }
      h1 { font-size: 1.8rem; }
      .content-box h2 { font-size: 1.5rem; margin-bottom: 20px; }
      .text-content { font-size: 1rem; }
      .instruction-list { margin-left: 15px; }
      .btn { padding: 12px 30px; font-size: 0.95rem; }
    }
  `]
})
export class TrooperComponent { }
