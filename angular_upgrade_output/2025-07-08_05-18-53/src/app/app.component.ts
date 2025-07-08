import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-upgrade-app';

  constructor() {}

  ngOnInit(): void {
    console.log('Angular 9 app component initialized');
  }
}
