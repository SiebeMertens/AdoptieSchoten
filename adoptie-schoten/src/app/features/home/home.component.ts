import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Animal {
  id: number;
  name: string;
  type: string;
  age: number;
  description: string;
  emoji: string;
  color1: string;
  color2: string;
}

interface Testimonial {
  text: string;
  name: string;
  petName: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newsletterEmail: string = '';

  spotlightAnimals: Animal[] = [
    {
      id: 1,
      name: 'Bella',
      type: 'Hond - Labrador',
      age: 3,
      description: 'Speelse en loyale vriendschappelijke hond, perfect voor gezinnen.',
      emoji: '🐕',
      color1: '#61C1C7',
      color2: '#47B3F1'
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Kat - Tabby',
      age: 2,
      description: 'Zachte en knuffelbare huiskat, houdt van interactie en spelen.',
      emoji: '🐈',
      color1: '#A0C531',
      color2: '#61C1C7'
    }
  ];

  featuredAnimals: Animal[] = [
    {
      id: 1,
      name: 'Bella',
      type: 'Hond - Labrador',
      age: 3,
      description: 'Speelse en loyale vriendschappelijke hond, perfect voor gezinnen.',
      emoji: '🐕',
      color1: '#61C1C7',
      color2: '#47B3F1'
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Kat - Tabby',
      age: 2,
      description: 'Zachte en knuffelbare huiskat, houdt van interactie en spelen.',
      emoji: '🐈',
      color1: '#A0C531',
      color2: '#61C1C7'
    },
    {
      id: 3,
      name: 'Max',
      type: 'Hond - Golden Retriever',
      age: 4,
      description: 'Energieke hond die van buiten spelen houdt. Zeer gedocil.',
      emoji: '🐕',
      color1: '#47B3F1',
      color2: '#A0C531'
    },
    {
      id: 4,
      name: 'Whiskers',
      type: 'Kat - Perzie',
      age: 1,
      description: 'Jonge playful kat met schattige persoonlijkheid.',
      emoji: '🐈',
      color1: '#61C1C7',
      color2: '#A0C531'
    },
    {
      id: 5,
      name: 'Rocky',
      type: 'Hond - Duitse Herder',
      age: 5,
      description: 'Intelligente en beschermende hond, ideaal voor actieve gezinnen.',
      emoji: '🐕',
      color1: '#A0C531',
      color2: '#47B3F1'
    },
    {
      id: 6,
      name: 'Mittens',
      type: 'Kat - Wit',
      age: 2,
      description: 'Lieve en rustige kat, perfect gezelschapsdier.',
      emoji: '🐈',
      color1: '#47B3F1',
      color2: '#61C1C7'
    }
  ];

  testimonials: Testimonial[] = [
    {
      text: 'Adopteren bij Adoptie Schoten was de beste beslissing van ons leven! Het hele proces was smooth en het team was erg ondersteunend.',
      name: 'Jan van der Berg',
      petName: 'met Bella de Labrador',
      avatar: '👨‍👩‍👧'
    },
    {
      text: 'Luna heeft ons gezin compleet gemaakt. Ze is nu al een deel van de familie. Dank je wel Adoptie Schoten!',
      name: 'Maria García',
      petName: 'met Luna de kat',
      avatar: '👩‍👩‍👧'
    },
    {
      text: 'Het was mijn eerste keer adopteren en Adoptie Schoten begeleidde me door elk stap. Professioneel en liefdevol!',
      name: 'Peter Jansen',
      petName: 'met Max de Golden',
      avatar: '👨‍💼'
    },
    {
      text: 'We hebben online kennis gemaakt met Rocky en konden niet wachten om hem mee naar huis te nemen. Perfect match!',
      name: 'Sarah & Tom',
      petName: 'met Rocky',
      avatar: '👨‍👩‍👦'
    }
  ];

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Subscription email:', this.newsletterEmail);
      // TODO: Implement actual newsletter subscription
      alert(`Bedankt voor het abonneren met: ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    }
  }
}
