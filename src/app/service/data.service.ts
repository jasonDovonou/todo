import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let todos = [
      { id: 1, state: 'undone', title: 'Change Header Color', description: '' },
      { id: 2, state: 'undone', title: 'Disable Edit Button', description: '' },
      { id: 3, state: 'undone', title: 'Add New Roles', description: '' },
      { id: 4, state: 'done', title: 'Angular 8 Migration', description: '' }
    ];

    return { todos };

  }
}