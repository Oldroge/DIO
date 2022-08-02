import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnName: string = '';
  @Input() btnClass: string = '';
  @Output() childEvent = new EventEmitter();
  textChild = 'clicou';

  constructor() { }

  ngOnInit(): void {
  }

  clickChild(): void {
    this.childEvent.emit('Clicou');
  };

}
