import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { courseModule } from './courses/course.module';
import { coreModule } from './core/core.module';
// Na parte superior do documento, são feitos os imports

@NgModule({
  // Todas as declarações de classes/classes criadas, ficam dentro da propriedade declarations
  declarations: [
    AppComponent,
  ],
  // Todos os imports feitos para dentro do módulo, ficam dentro desta propriedade
  imports: [
    BrowserModule,
    HttpClientModule,
    courseModule,
    coreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
