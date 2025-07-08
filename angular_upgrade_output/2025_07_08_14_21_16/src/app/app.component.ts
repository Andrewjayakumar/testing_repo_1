/* Angular 9 upgraded app.component.ts content with updated decorators, lifecycle hooks, and TypeScript syntax */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular9 Upgrade';

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
