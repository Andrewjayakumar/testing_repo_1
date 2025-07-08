// Upgraded Angular 9 version of app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // Since Angular 9 supports providedIn: 'root' in services
  bootstrap: [AppComponent]
})
export class AppModule { }
