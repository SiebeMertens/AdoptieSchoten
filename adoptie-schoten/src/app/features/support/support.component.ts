import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>Steun Ons</h1>
          <p class="subtitle">Help ons dieren in nood te helpen</p>
        </div>

        <!-- Intro Section -->
        <section class="support-section intro-section">
          <p class="intro-text">
            We hebben in ons dierenasiel veel poezen en honden. Er zijn er die wachten op een nieuwe thuis, maar er zijn er ook die bij ons langer zullen blijven, sommigen door hun leeftijd, anderen om medische aandoeningen en sommigen hebben al zoveel meegemaakt dat een herplaatsing niet gemakkelijk is.
          </p>
          <p class="intro-text">
            Jouw steun is essentieel voor ons. Hieronder vind je verschillende manieren waarop je ons kan helpen! 💛
          </p>
        </section>

        <!-- Food Donation Section -->
        <section class="support-section">
          <div class="section-header">
            <h2>🍖 Schenk ons voeding</h2>
            <p class="section-description">Hulp waar onze dieren het meest nood aan hebben</p>
          </div>
          <div class="section-content">
            <p>We hebben altijd behoefte aan voeding voor onze bewoners:</p>
            <ul class="food-list">
              <li>Hondenvoeding voor kleine rassen</li>
              <li>Kattenvoeding / kittenvoeding</li>
              <li>Niet klontherend kattenzand</li>
            </ul>
            <p>Elke gift helpt ons al een stapje verder!</p>
          </div>
        </section>

        <!-- Financial Contribution Section -->
        <section class="support-section">
          <div class="section-header">
            <h2>💳 Financiële bijdrage</h2>
            <p class="section-description">Help ons met de medische en dagelijkse verzorging</p>
          </div>
          <div class="section-content">
            <p>Om de dierenarts, voeding, materiaal en andere verzorgingskosten te betalen, kunnen we jouw financiële steun goed gebruiken.</p>
            <p><strong>Elke gift, hoe klein ze ook is, helpt ons al een stapje verder!</strong></p>
            <p>Stort het bedrag op rekeningnummer:</p>
            <div class="bank-info">
              <p class="bank-account">Fortis BE15 220-0412438-30</p>
              <p class="bank-note">Vermeld duidelijk 'Steun', uw naam en adres</p>
            </div>
          </div>
        </section>

        <!-- Testament Section -->
        <section class="support-section">
          <div class="section-header">
            <h2>📜 Onze VZW opnemen in uw testament</h2>
            <p class="section-description">Een prachtige gift voor de toekomst van de dieren</p>
          </div>
          <div class="section-content">
            <p>Als u van plan bent één of meerdere goederen te vermaken aan de vzw, is het voldoende enkele eenvoudige regels in acht te nemen.</p>
            
            <h4>Mogelijkheden voor uw testament:</h4>
            <div class="testament-options">
              <div class="testament-option">
                <h5>Optie 1: Via een Notaris</h5>
                <p>Het testament onder vorm van een akte opstellen bij een notaris. Dit is de veiligste optie.</p>
              </div>
              <div class="testament-option">
                <h5>Optie 2: Eigenhandig Testament</h5>
                <p>Een eigenhandig geschreven testament opstellen, zonder doorhalingen of verbeteringen. Dit moet gedagtekend en ondertekend zijn. Er zijn geen getuigen vereist.</p>
                <p><strong>Advies:</strong> Het is raadzaam dit testament aan een notaris af te geven die het zal laten registreren. Mocht u dit niet wensen, ist het wel mogelijk dat u ons een kopie laat toekomen.</p>
              </div>
            </div>

            <h4>Voorbeeldtekst voor uw testament:</h4>
            <div class="testament-template">
              <p>
                <em>Dit is mijn testament. Ondergetekende....................(naam, voornamen, datum en plaats van geboorte, woonplaats) vermaak aan de vzw Dierenasiel Schoten, met maatschappelijke zetel in de Sluizenstraat 119 te Schoten, de som van ..............euro (of de goederen hieronder aangeduid), vrij van alle successie- of andere rechten.</em>
              </p>
            </div>

            <h4>Alternatieve formulering:</h4>
            <div class="testament-template">
              <p>
                <em>Ik wens dat de terreinen, hieronder aangeduid, toevertrouwd worden aan en beheerd worden door dezelfde vereniging. Opgesteld te...............op............(datum voluit in letters)</em>
              </p>
            </div>

            <div class="testament-info">
              <p>⚠️ Het spreekt voor zich dat de legataris zijn beslissing kan handhaven of zijn testament kan veranderen door middel van een eigenhandig geschreven brief.</p>
              <p>Mocht u nog aanvullende vragen hebben, dan kunt u natuurlijk ook ten allentijde contact opnemen met uw notaris of met ons.</p>
            </div>
          </div>
        </section>

        <!-- Footer CTA
        <section class="cta-footer">
          <p>Dank u wel voor uw interesse in ons dierenasiel!</p>
          <p>📧 <strong>Hebben we vragen?</strong> Neem contact met ons op: <a href="mailto:dierenasielschoten@gmail.com">dierenasielschoten@gmail.com</a> of <a href="tel:03.658.95.76">03.658.95.76</a></p>
        </section> -->
      </div>
    </div>
  `,
  styles: [`
    :host { --color-primary: #61C1C7; --color-secondary: #47B3F1; --color-tertiary: #A0C531; --color-white: #FFFFFF; --color-dark: #1a1a1a; --color-light: #f8f9fa; --color-gray: #666666; }
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
    
    .food-list { margin: 12px 0 0 30px; font-size: 1rem; }
    .food-list li { margin: 8px 0; color: #444; }
    
    .testament-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0; }
    .testament-option { background: var(--color-light); padding: 20px; border-radius: 10px; border-left: 4px solid var(--color-secondary); }
    .testament-option h5 { color: var(--color-secondary); font-size: 1.1rem; margin: 0 0 12px 0; font-weight: 700; }
    .testament-option p { margin: 8px 0; font-size: 0.95rem; color: #444; line-height: 1.6; }
    
    .testament-template { background: rgba(71, 179, 241, 0.08); border-left: 4px solid var(--color-secondary); padding: 18px; border-radius: 8px; margin: 15px 0; font-style: italic; line-height: 1.7; color: #555; }
    
    .testament-info { background: rgba(255, 165, 0, 0.1); padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #FFA500; }
    .testament-info p { margin: 8px 0; font-size: 0.95rem; color: #444; }
    
    .cta-footer { text-align: center; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); padding: 30px; border-radius: 12px; color: var(--color-white); margin-top: 20px; }
    .cta-footer p { margin: 10px 0; font-size: 1.05rem; }
    .cta-footer a { color: var(--color-white); text-decoration: underline; font-weight: 600; }
    .cta-footer a:hover { opacity: 0.85; }
    
    h4 { font-size: 1.2rem; color: var(--color-dark); margin: 20px 0 12px 0; font-weight: 700; }
    
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
      .testament-options { grid-template-columns: 1fr; }
    }
  `]
})
export class SupportComponent { }
