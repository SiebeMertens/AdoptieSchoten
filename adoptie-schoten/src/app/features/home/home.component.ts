import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <!-- Hero Banner -->
      <div class="hero-banner">
        <img src="/banner-animals.jpg" alt="Banner met dieren" class="banner-image">
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1 class="banner-title">Welkom bij Adoptie Schoten</h1>
          <p class="banner-subtitle">Geef een dier een thuis vol liefde</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="page-container">
        <div class="page-header">
          <h2>Over Adoptie Schoten</h2>
          <p class="subtitle">Ons dierenshuis helpt dieren in nood</p>
        </div>
        <div class="page-content">
          <p>Dit is de homepage van ons dierenshuis. Hier vindt u informatie over adoptie, opvang en ondersteuning van dieren.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #f8f9fa;
    }
    .hero-banner {
      position: relative;
      height: 350px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .banner-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(160, 197, 49, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
    }
    .banner-content {
      position: relative;
      z-index: 10;
      text-align: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .banner-title {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 15px 0;
      letter-spacing: -1px;
    }
    .banner-subtitle {
      font-size: 1.3rem;
      font-weight: 300;
      margin: 0;
    }
    .page-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 60px 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .page-header {
      margin-bottom: 40px;
    }
    h2 {
      font-size: 2.2rem;
      color: #A0C531;
      margin: 0 0 15px 0;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
    }
    .page-content {
      font-size: 1rem;
      line-height: 1.6;
      color: #555;
    }
    @media (max-width: 768px) {
      .hero-banner {
        height: 250px;
      }
      .banner-title {
        font-size: 2rem;
      }
      .banner-subtitle {
        font-size: 1rem;
      }
      .page-container {
        padding: 40px 20px;
      }
      h2 {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 480px) {
      .hero-banner {
        height: 180px;
      }
      .banner-title {
        font-size: 1.5rem;
      }
      .banner-subtitle {
        font-size: 0.9rem;
      }
    }
  `]
})
export class HomeComponent { }
