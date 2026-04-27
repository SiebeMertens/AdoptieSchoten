import type { PetSpecies } from './pet.model';

export interface Category {
  id: string;
  name: string;
  slug: string;
  species: PetSpecies | 'All';
}
