import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = 'Guilherme';
  userData = {
    email: 'guilherme@gmail.com',
    role: 'admin',
  };
  title = 'course_angular';
}
