import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';
import { UserModel } from './user.model';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new UserModel(this.myform.value.email, this.myform.value.password);
        this.authService.signIn(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token),
                localStorage.setItem('userId', data.userId),
                _this.router.navigateByUrl('/');
        });
        this.myform.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myform = new FormGroup({
            email: new FormControl(null, [Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    return SigninComponent;
}());
export { SigninComponent };
