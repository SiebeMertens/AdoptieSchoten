export type PetSpecies = 'Dog' | 'Cat';
export type PetSize = 'Small' | 'Medium' | 'Large';

export interface Pet {
  id: string;
  name: string;
  species: PetSpecies;
  breed: string;
  ageYears: number;
  size: PetSize;
  description: string;
  gallery: string[];
  location: string;
  isVaccinated: boolean;
  isNeutered: boolean;
  adoptionFee?: number;
}
