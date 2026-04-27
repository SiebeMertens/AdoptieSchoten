import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { Pet, PetSize, PetSpecies } from '../../models/pet.model';

type AgeFilter = 'All' | 'Puppy' | 'Adult' | 'Senior';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
})
export class PetListComponent implements OnInit {
  private readonly petService = inject(PetService);

  readonly speciesFilter = signal<'All' | PetSpecies>('All');
  readonly ageFilter = signal<AgeFilter>('All');
  readonly sizeFilter = signal<'All' | PetSize>('All');

  readonly pets = this.petService.pets;
  readonly loading = this.petService.loading;
  readonly error = this.petService.error;

  readonly filteredPets = computed(() => {
    const pets = this.petService.pets();
    const speciesFilter = this.speciesFilter();
    const ageFilter = this.ageFilter();
    const sizeFilter = this.sizeFilter();

    return pets.filter((pet) => {
      const matchesSpecies = speciesFilter === 'All' || pet.species === speciesFilter;
      const matchesSize = sizeFilter === 'All' || pet.size === sizeFilter;
      const matchesAge = this.matchesAgeFilter(pet.ageYears, ageFilter);

      return matchesSpecies && matchesSize && matchesAge;
    });
  });

  ngOnInit(): void {
    this.petService.loadPets();
  }

  setSpeciesFilter(value: string): void {
    this.speciesFilter.set(value as 'All' | PetSpecies);
  }

  setAgeFilter(value: string): void {
    this.ageFilter.set(value as AgeFilter);
  }

  setSizeFilter(value: string): void {
    this.sizeFilter.set(value as 'All' | PetSize);
  }

  trackByPetId(_: number, pet: Pet): string {
    return pet.id;
  }

  private matchesAgeFilter(ageYears: number, filter: AgeFilter): boolean {
    if (filter === 'All') {
      return true;
    }

    if (filter === 'Puppy') {
      return ageYears < 1;
    }

    if (filter === 'Adult') {
      return ageYears >= 1 && ageYears < 7;
    }

    return ageYears >= 7;
  }
}
