import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';
import { IPeople } from '../app/shared/interfaces/people/peopleInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Diretivas';
  counter = 1;
  people: IPeople[] = [];
  text = '';
  name = '';

  constructor(private peopleService: PeopleService) {

  }
  
  ngOnInit() {
    this.getPeople()
    let increaseCounter = setInterval(() => {
      this.counter++;

      if (this.counter === 10) {
        clearInterval(increaseCounter);
      }
    }, 1000)
  }

  click(nome: string): void {
    this.name = nome;
    console.log('clicou em mim', nome)
  };

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    })
  }
}
