import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;
  stayConnected!: boolean;

  constructor(private router: Router) { }

  login(): void {
    if (this.stayConnected) {
      document.cookie = `username=${this.username}; path=/`;
    } else {
      localStorage.setItem('username', this.username);
    }

    this.router.navigate(['/dashboard']).then(() => {
    }).catch(error => {
      console.error("Erro de navegação:", error);
    });
  }
}
