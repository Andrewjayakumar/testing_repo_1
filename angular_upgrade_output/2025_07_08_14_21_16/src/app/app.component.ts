/* Upgraded to Angular 9: Updated decorators, lifecycle hooks, and import statements */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular upgraded app';
  ngOnInit() {
    // Initialization logic
  }
}
