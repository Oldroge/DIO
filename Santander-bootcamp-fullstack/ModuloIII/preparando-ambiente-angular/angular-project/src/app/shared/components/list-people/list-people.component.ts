import { Component, OnInit } from '@angular/core';
import { IPeople } from '../../interfaces/people/peopleInterface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  people: IPeople[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    })
  }

}
