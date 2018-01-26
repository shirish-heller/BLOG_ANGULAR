import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';
import { UserModel } from './user.model';

@Component({
  selector: 'heller-signin',
  templateUrl: './signin.component.html',
  styles: [`input.ng-invalid.ng-touched {
    border: 1px solid red;
}`]
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  myform: FormGroup ;

    onSubmit() {
        const user = new UserModel(this.myform.value.email, this.myform.value.password);
        this.authService.signIn(user)
        .subscribe(
          data => {
            localStorage.setItem('token', data.token),
            localStorage.setItem('userId', data.userId),
            this.router.navigateByUrl('/');
          });
        this.myform.reset();

        }

    ngOnInit() {
      this.myform = new FormGroup ({
        email: new FormControl (null, [Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
        password: new FormControl (null, Validators.required)
      });
    }

}
