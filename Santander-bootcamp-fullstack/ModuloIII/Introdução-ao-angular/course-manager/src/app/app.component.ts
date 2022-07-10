import { Component } from '@angular/core';

@Component({
  // O selector utiliza o app root no index.html para referenciar onde sera renderizado a aplicação
  selector: 'app-root',
  // O templateUrl referencia o arquivo no qual vai ser utilizado para poder referenciar as propriedades, atributos e etc
  templateUrl: './app.component.html',
  // O styleUrls utiliza como base o arquivo setado para ele, ou seja, este arquivo de css irá alterar todos os componentes e páginas da aplicação.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';
  name: string = 'John'
}
