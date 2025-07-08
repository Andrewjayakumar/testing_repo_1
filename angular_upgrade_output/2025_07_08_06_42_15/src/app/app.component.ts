// Upgraded Angular 9 version of app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular 9 Upgrade';

  ngOnInit() {
    // Initialization logic here
  }
}
