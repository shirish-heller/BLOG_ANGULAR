import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserModel } from './user.model';

@Component({
  selector: 'heller-signup',
  templateUrl: './signup.component.html',
  styles: [
    `
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
    `
  ]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) {}
  myform: FormGroup ;

  onSubmit() {
    console.log(this.myform);
    const user = new UserModel (this.myform.value.email,
       this.myform.value.password,
       this.myform.value.firstName,
       this.myform.value.lastName);

       this.authService.signUp(user)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.myform.reset();
      }

  ngOnInit() {
    this.myform = new FormGroup ({
      firstName: new FormControl (null, Validators.required),
      lastName: new FormControl (null, Validators.required),
      email: new FormControl (null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]),
      password: new FormControl (null, Validators.required)

    });
  }

}
