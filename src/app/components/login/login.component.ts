import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin, UserRegister } from '../../user.model';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  
  private router = inject(Router);

  isSignUpMode = false;

  showSignUp() {
    this.isSignUpMode = true;
  }

  showSignIn() {
    this.isSignUpMode = false;
  }

  registerObj: UserRegister = new UserRegister();
  loginObj: UserLogin = new UserLogin();


  onRegister()
  {
    
  }

  onLogin()
  {
  }
  
}
