import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = "Hello World";
  date = new Date;
  pessoa = {
    nome: 'Roge',
    idade: '27',
    profissao: 'dev'
  }

  constructor(private upperCase: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCase.transform(this.text);
  }

}
