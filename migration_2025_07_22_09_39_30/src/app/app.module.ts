import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [] // Bootstrapping is now handled directly by standalone components
})
export class AppModule {}
