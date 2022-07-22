import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diretivas';
  counter = 1;
  people = [
    {
      nome: 'Rogério',
      sobrenome: 'Martins'
    },
    {
      nome: 'Fabrício',
      sobrenome: 'Gonçalves'
    },
    {
      nome: 'Mariana',
      sobrenome: 'Martins'
    },
    {
      nome: 'Robson',
      sobrenome: 'Amorim'
    }
  ];
  text = '';

  ngOnInit() {
    let increaseCounter = setInterval(() => {
      this.counter++;

      if (this.counter === 10) {
        clearInterval(increaseCounter);
      }
    }, 1000)
  }

  click(nome: string): void {
    console.log('clicou em mim', nome)
  };
}
