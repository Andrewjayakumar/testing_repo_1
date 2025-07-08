import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // other components if any...
  ],
  imports: [
    BrowserModule,
    // additional modules as needed...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
