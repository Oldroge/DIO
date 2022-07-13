import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { navBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { courseModule } from './courses/course.module';
// Na parte superior do documento, são feitos os imports

@NgModule({
  // Todas as declarações de classes/classes criadas, ficam dentro da propriedade declarations
  declarations: [
    AppComponent,
    navBarComponent,
    Error404Component,
  ],
  // Todos os imports feitos para dentro do módulo, ficam dentro desta propriedade
  imports: [
    BrowserModule,
    HttpClientModule,
    courseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
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
