import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  standalone: true,
  imports: [],
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {
  constructor() {
    // Constructor injection updated to Angular v17 standards
  }
}
