import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PetService } from '../../core/services/pet.service';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <a class="text-sm font-medium text-emerald-300 hover:text-emerald-200" routerLink="/pets">Back to pets</a>
        <div class="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p class="text-slate-300">Pet details page scaffold for route /pets/:id.</p>
        </div>
      </div>
    </section>
  `,
})
export class PetDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly petService = inject(PetService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.petService.loadPetById(id);
    }
  }
}
