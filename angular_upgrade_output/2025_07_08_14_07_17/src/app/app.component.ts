import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Modernized Angular App';

  constructor() {}

  ngOnInit(): void {
    // Initialization logic updated for Angular 9 compatibility
  }
}
