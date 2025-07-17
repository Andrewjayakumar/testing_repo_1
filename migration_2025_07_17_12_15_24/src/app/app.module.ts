import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Although most components are now standalone, this module is retained for legacy compatibility
@NgModule({
  declarations: [],
  imports: [
    BrowserModule
    // Note: Standalone components are imported directly in routing using loadComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
