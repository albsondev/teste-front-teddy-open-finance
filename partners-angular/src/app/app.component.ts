import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'partners-angular';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('username');
    document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    this.router.navigate(['/login']);
  }
}
