import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Foto's Asiel</h1>
      <p>Galerij met foto's van ons asiel en dieren.</p>
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
export class PhotosComponent { }
