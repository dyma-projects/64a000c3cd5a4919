import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';

@NgModule({
  declarations: [AppComponent, Exercice1Component, Exercice2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
