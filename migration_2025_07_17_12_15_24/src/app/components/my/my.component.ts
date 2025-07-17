import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  standalone: true,
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {
  data: any;

  constructor() {
    // Initialization code
  }

  ngOnInit(): void {
    // Perform initialization logic here
  }
}
