import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular17App';

  // Legacy logic preserved and updated if necessary
  constructor() { }

  ngOnInit(): void {
    // initialization logic updated for Angular 17
  }
}
