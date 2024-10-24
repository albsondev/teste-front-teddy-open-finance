import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  stayConnected: boolean = false;

  login() {
    if (this.stayConnected) {
      document.cookie = `username=${this.username}; path=/`;
    } else {
      localStorage.setItem('username', this.username);
    }
    // Redirecionar para a página inicial
    window.location.href = '/dashboard';
  }
}
