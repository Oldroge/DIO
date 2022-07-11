import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { starComponent } from './star/star.component';
// Na parte superior do documento, são feitos os imports

@NgModule({
  // Todas as declarações de classes, ficam dentro da propriedade declarations
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent
  ],
  // Todos os imports feitos para dentro do módulo, ficam dentro desta propriedade
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
