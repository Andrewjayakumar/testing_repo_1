import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Note: Standalone components are no longer declared here
// This module is retained for legacy compatibility and global providers
@NgModule({
  imports: [
    BrowserModule,
    // Other module imports
  ],
  bootstrap: []
})
export class AppModule { }
