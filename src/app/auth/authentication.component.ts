import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'heller-authentication',
  templateUrl: './authentication.component.html',
  styles: []
})
export class AuthenticationComponent {

  constructor(private authService: AuthService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
