import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Rogério',
        lastName: 'Martins',
        age: 27
      },
      {
        firstName: 'Fabrício',
        lastName: 'Amorim',
        age: 18
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 31
      },
      {
        firstName: 'Isabela',
        lastName: 'Martins',
        age: 14
      },
    ]
    return of(peopleArray)
  }
}
