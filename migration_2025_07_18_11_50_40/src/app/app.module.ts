import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [], // Standalone components declared via imports
  imports: [
    BrowserModule,
    AppComponent // Now a standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
