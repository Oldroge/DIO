import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Verificar a documentação de RouterModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { starComponent } from './star/star.component';
import { replacePipe } from './pipe/replace.pipe';
import { navBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
// Na parte superior do documento, são feitos os imports

@NgModule({
  // Todas as declarações de classes, ficam dentro da propriedade declarations
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent,
    replacePipe,
    navBarComponent,
    Error404Component
  ],
  // Todos os imports feitos para dentro do módulo, ficam dentro desta propriedade
  imports: [
    BrowserModule,
    FormsModule,
    // Dúvida do forRoot
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
