import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Roge';
  urlImage = 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=740&t=st=1658720672~exp=1658721272~hmac=d6a3c3a6ff59940a7212f5d309f60d9506184a5818adeaaa5863754de6c4582c';
  altText = 'Essa é uma imagem';
  buttonText = 'Clique aqui';
  textRed = 'textred';
  bgColor = 'green';
  width = 600;
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(a: string) {
    console.log('clicou aqui', a)
  }

  pinta(): void {
    if (this.textRed === 'textred') {
      this.textRed = '';
    } else {
      this.textRed = 'textred';
    }
  }

}
