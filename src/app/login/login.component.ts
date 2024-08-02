import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe((response: { username: any; role: any; }) => {
      const { username, role } = response;
      localStorage.setItem('username', username);
      this.router.navigate([role === 'Admin' ? '/admin-welcome' : '/user-welcome']);
    }, () => {
      alert('Invalid login');
    });
  }

  resetPassword() {
    const email = prompt('Enter your email');
    if (email) {
      this.authService.resetPassword(email).subscribe((response: { password: string; }) => {
        alert('Your password is: ' + response.password);
      }, () => {
        alert('Email not found');
      });
    }
  }
}
