import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor() {
    // Initialization code if needed
  }

  ngOnInit(): void {
    // Component initialization logic
  }
}
