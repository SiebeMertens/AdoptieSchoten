import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          <h1>Foto's Asiel</h1>
          <p class="subtitle">Bekijk onze dieren en ons asiel</p>
        </div>

        <!-- Photos Gallery -->
        <section class="gallery-section">
          <div class="photos-grid">
            @for (photo of photos; track photo; let i = $index) {
              <div class="photo-item" (click)="openLightbox(i)">
                <img [src]="photo" alt="Foto van het asiel" loading="lazy">
                <div class="photo-overlay"></div>
              </div>
            }
          </div>

          @if (photos.length === 0) {
            <div class="no-photos">
              <p>Geen foto's beschikbaar op dit moment.</p>
            </div>
          }
        </section>

        <!-- Lightbox Modal -->
        @if (selectedPhotoIndex !== null) {
          <div class="lightbox" (click)="closeLightbox()">
            <div class="lightbox-content" (click)="$event.stopPropagation()">
              <img [src]="photos[selectedPhotoIndex]" alt="Foto van het asiel">
              
              <!-- Navigation Buttons -->
              @if (photos.length > 1) {
                <button class="nav-btn prev-btn" (click)="previousPhoto()" aria-label="Vorige foto">
                  &#10094;
                </button>
                <button class="nav-btn next-btn" (click)="nextPhoto()" aria-label="Volgende foto">
                  &#10095;
                </button>
                <div class="photo-counter">
                  {{ selectedPhotoIndex + 1 }} / {{ photos.length }}
                </div>
              }
              
              <button class="close-btn" (click)="closeLightbox()" aria-label="Sluiten">✕</button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { --color-primary: #61C1C7; --color-secondary: #47B3F1; --color-tertiary: #A0C531; --color-white: #FFFFFF; --color-dark: #1a1a1a; --color-light: #f8f9fa; --color-gray: #666666; }
    .page-wrapper { display: flex; flex-direction: column; min-height: calc(100vh - 70px); background: linear-gradient(135deg, var(--color-light) 0%, #e8f0f7 100%); }
    .page-container { max-width: 1400px; width: 100%; margin: 0 auto; padding: 40px 30px; display: flex; flex-direction: column; }
    
    .page-header { margin-bottom: 40px; text-align: center; }
    h1 { font-size: 2.8rem; color: var(--color-tertiary); margin: 0 0 10px 0; font-weight: 800; }
    .subtitle { font-size: 1.1rem; color: var(--color-gray); margin: 0; font-weight: 400; }
    
    .gallery-section { }
    .photos-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    
    .photo-item { position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); cursor: pointer; aspect-ratio: 4 / 3; }
    .photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
    .photo-item:hover img { transform: scale(1.08); }
    
    .photo-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0); transition: background 0.3s ease; pointer-events: none; }
    .photo-item:hover .photo-overlay { background: rgba(97, 193, 199, 0.2); }
    
    .no-photos { text-align: center; padding: 60px 20px; }
    .no-photos p { font-size: 1.2rem; color: var(--color-gray); }
    
    /* Lightbox */
    .lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.95); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
    .lightbox-content { position: relative; width: 900px; height: 675px; }
    .lightbox-content img { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); }
    
    /* Navigation Buttons */
    .nav-btn { position: absolute; top: 50%; background: rgba(97, 193, 199, 0.8); border: none; color: var(--color-white); font-size: 1.8rem; cursor: pointer; padding: 15px 18px; border-radius: 50%; transition: all 0.3s ease; transform: translateY(-50%); }
    .nav-btn:hover { background: rgba(97, 193, 199, 1); transform: translateY(-50%) scale(1.1); }
    
    .prev-btn { left: -60px; }
    .next-btn { right: -60px; }
    
    .photo-counter { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); background: rgba(0, 0, 0, 0.6); color: var(--color-white); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; }
    
    .close-btn { position: absolute; top: -40px; right: 0; background: none; border: none; color: var(--color-white); font-size: 2rem; cursor: pointer; padding: 10px; transition: color 0.3s ease; }
    .close-btn:hover { color: var(--color-primary); }
    
    @media (max-width: 1024px) {
      .photos-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 15px; }
      .page-container { padding: 30px 20px; }
      .lightbox-content { width: 750px; height: 562px; }
      .prev-btn { left: 10px; }
      .next-btn { right: 10px; }
    }
    
    @media (max-width: 768px) {
      .photos-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
      h1 { font-size: 2.2rem; }
      .page-container { padding: 25px 15px; }
      .lightbox-content { width: 600px; height: 450px; }
      .close-btn { top: -35px; font-size: 1.5rem; }
      .prev-btn { left: 5px; padding: 12px 15px; font-size: 1.5rem; }
      .next-btn { right: 5px; padding: 12px 15px; font-size: 1.5rem; }
    }
    
    @media (max-width: 480px) {
      .photos-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
      h1 { font-size: 1.8rem; }
      .lightbox-content { width: 450px; height: 337px; }
      .prev-btn { left: 0; padding: 10px 12px; font-size: 1.3rem; }
      .next-btn { right: 0; padding: 10px 12px; font-size: 1.3rem; }
      .photo-counter { font-size: 0.8rem; padding: 6px 12px; }
    }
  `]
})
export class PhotosComponent implements OnInit {
  photos: string[] = [];
  selectedPhotoIndex: number | null = null;

  ngOnInit() {
    this.loadPhotos();
  }

  async loadPhotos() {
    try {
      // Load the manifest file that lists all photos
      const response = await fetch('/fotos/manifest.json');
      if (!response.ok) {
        throw new Error('Failed to load manifest');
      }
      
      const manifest = await response.json();
      this.photos = manifest.photos
        .map((file: string) => `/fotos/${file}`)
        .sort();
      
      console.log('Loaded photos dynamically:', this.photos);
    } catch (error) {
      console.error('Error loading photos:', error);
      // Fallback to empty array if manifest not found
      this.photos = [];
    }
  }

  openLightbox(index: number) {
    this.selectedPhotoIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedPhotoIndex = null;
    document.body.style.overflow = 'auto';
  }

  nextPhoto() {
    if (this.selectedPhotoIndex !== null) {
      this.selectedPhotoIndex = (this.selectedPhotoIndex + 1) % this.photos.length;
    }
  }

  previousPhoto() {
    if (this.selectedPhotoIndex !== null) {
      this.selectedPhotoIndex = (this.selectedPhotoIndex - 1 + this.photos.length) % this.photos.length;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.selectedPhotoIndex === null) return;

    if (event.key === 'ArrowRight') {
      this.nextPhoto();
    } else if (event.key === 'ArrowLeft') {
      this.previousPhoto();
    } else if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }
}
