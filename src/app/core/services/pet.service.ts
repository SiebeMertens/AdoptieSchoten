import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { Application } from '../../models/application.model';
import { Pet } from '../../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/pets';

  private readonly petsState = signal<Pet[]>([]);
  private readonly selectedPetState = signal<Pet | null>(null);
  private readonly loadingState = signal(false);
  private readonly errorState = signal<string | null>(null);

  readonly pets = computed(() => this.petsState());
  readonly selectedPet = computed(() => this.selectedPetState());
  readonly loading = computed(() => this.loadingState());
  readonly error = computed(() => this.errorState());

  loadPets(): void {
    this.loadingState.set(true);
    this.errorState.set(null);

    this.http
      .get<Pet[]>(this.apiUrl)
      .pipe(
        tap((pets) => this.petsState.set(pets)),
        catchError((error: unknown) => {
          this.errorState.set(this.formatError(error));
          this.petsState.set([]);
          return of([] as Pet[]);
        }),
        finalize(() => this.loadingState.set(false))
      )
      .subscribe();
  }

  loadPetById(id: string): void {
    this.loadingState.set(true);
    this.errorState.set(null);

    this.http
      .get<Pet>(`${this.apiUrl}/${id}`)
      .pipe(
        tap((pet) => this.selectedPetState.set(pet)),
        catchError((error: unknown) => {
          this.errorState.set(this.formatError(error));
          this.selectedPetState.set(null);
          return of(null);
        }),
        finalize(() => this.loadingState.set(false))
      )
      .subscribe();
  }

  submitApplication(application: Application) {
    return this.http.post<Application>(`${this.apiUrl}/${application.petId}/applications`, application);
  }

  clearSelectedPet(): void {
    this.selectedPetState.set(null);
  }

  private formatError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === 'string') {
      return error;
    }

    return 'Unable to load pet data.';
  }
}
