import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  stayConnected: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.stayConnected) {
      document.cookie = `username=${this.username}; path=/`;
    } else {
      localStorage.setItem('username', this.username);
    }
    // Corrigido para usar navegação do Angular
    this.router.navigate(['/dashboard']).then(success => {
      if (!success) {
        console.error('Navigation has failed!');
      }
    });
  }
}
