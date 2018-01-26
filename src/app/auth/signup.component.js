import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserModel } from './user.model';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myform);
        var user = new UserModel(this.myform.value.email, this.myform.value.password, this.myform.value.firstName, this.myform.value.lastName);
        this.authService.signUp(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.myform.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myform = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    return SignupComponent;
}());
export { SignupComponent };
