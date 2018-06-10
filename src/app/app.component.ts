import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Main</h1>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
