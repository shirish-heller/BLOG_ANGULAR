import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'heller-logout',
  templateUrl: './logout.component.html',
  styles: [`.btnSpacing { margin-top:10px;}`]
})
export class LogoutComponent {

  constructor (private authService: AuthService, private router: Router) {}

    onLogout() {
      this.authService.logout();
      this.router.navigate(['/auth', 'signin']);
    }
}
