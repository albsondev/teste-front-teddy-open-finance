import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'partners-angular';

  logout() {
    localStorage.removeItem('username');
    document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    this['router'].navigate(['/login']);
  }
}
