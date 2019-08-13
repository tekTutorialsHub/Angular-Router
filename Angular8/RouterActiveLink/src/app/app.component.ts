import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing Module - Child/ Nested Routes Demo';
  active="active1";

  getClass() {
    return "active1"
  }
}
