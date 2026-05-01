import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-certificate',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>Fiscaal Attest</h1>
          <p class="subtitle">Informatie over ons fiscaal attest</p>
        </div>
        <div class="page-content">
          <section class="content-section">
            <h2>Fiscaal attest</h2>
            <p>Vanaf 1 januari 2022 kunnen wij fiscale attesten afleveren</p>
          </section>

          <section class="content-section">
            <h2>Belastingvermindering</h2>
            <p>U heeft recht op een belastingvermindering van 45% van het bedrag van uw gift als uw gift voldoet aan de volgende voorwaarden:</p>
            
            <ul class="conditions-list">
              <li>de gift moet minstens 40 euro bedragen, per kalenderjaar en per vereniging (deze kan samengesteld zijn uit verschillende stortingen van dezelfde schenker),</li>
              <li>de gift moet gedaan zijn aan een erkende instelling,</li>
              <li>de instelling moet een kwijtschrift uitreiken voor de giften die zij ontvangt,</li>
              <li>de gift moet in geld gedaan zijn, en van u alleen komen (dus niet de opbrengst van een collectieve geldinzameling of actie),</li>
              <li>de gift gebeurt zonder tegenprestatie (deze mag niet geheel of zelfs gedeeltelijk de levering van een goed of de prestatie van een dienst vergoeden).</li>
            </ul>

            <p><strong>Het Dierenasiel Schoten geeft aan de overheid door wie een fiscaal attest ontving.</strong></p>
          </section>

          <section class="content-section">
            <h2>Je fiscaal attest automatisch in je aangifte?</h2>
            <p>Als de belastingdienst je met 100% zekerheid kan identificeren, verschijnt je fiscaal attest automatisch in je aangifte. Geef je volledige voornaam, familienaam, adresgegevens, geboortedatum en volledigheidshalve het Rijksregisternummer door bij je overschrijving of via <strong>dierenasielschoten@gmail.com</strong></p>
          </section>

          <section class="content-section">
            <h2>Voor welke verenigingen en instellingen heb ik recht op een belastingvermindering?</h2>
            <p>Alleen giften aan erkende instellingen kunnen recht geven op een belastingvermindering. Het gaat om instellingen die ofwel uitdrukkelijk opgenomen zijn in de wet, ofwel erkend zijn door de Minister van Financiën. Giften via een derde partij komen niet in aanmerking.</p>
            
            <p><strong>Dierenasiel Schoten vzw is een erkend goed doel. Giften aan onze organisatie zijn dus fiscaal aftrekbaar.</strong></p>
          </section>
        </div>
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
    
    .page-content { font-size: 1.05rem; line-height: 1.8; color: #333; }
    
    .content-section { margin-bottom: 35px; }
    .content-section h2 { font-size: 1.6rem; color: var(--color-secondary); margin: 0 0 15px 0; font-weight: 700; border-bottom: 2px solid var(--color-tertiary); padding-bottom: 10px; }
    .content-section p { margin: 0 0 15px 0; }
    
    .conditions-list { margin: 20px 0 20px 30px; padding: 0; }
    .conditions-list li { margin-bottom: 12px; list-style-type: disc; }
    
    @media (max-width: 768px) {
      .page-container { padding: 30px 20px; }
      h1 { font-size: 2.2rem; }
      .content-section h2 { font-size: 1.4rem; }
      .page-content { font-size: 1rem; }
    }
    
    @media (max-width: 480px) {
      .page-container { padding: 25px 15px; }
      h1 { font-size: 1.8rem; }
      .content-section h2 { font-size: 1.2rem; }
      .page-content { font-size: 0.95rem; line-height: 1.6; }
    }
  `]
})
export class TaxCertificateComponent { }
