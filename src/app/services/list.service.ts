import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  remove(animals: Array<Animal>, animal: Animal): Array<Animal> {
    return animals.filter((a) => animal.name !== a.name);
  }
}
