import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Welkom bij Adoptie Schoten</h1>
      <p>Dit is de homepage van ons dierenshuis.</p>
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
export class HomeComponent { }
