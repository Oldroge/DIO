import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 2;
  text = "Hello World";

  constructor(private upperCase: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCase.transform(this.text);
  }

}
