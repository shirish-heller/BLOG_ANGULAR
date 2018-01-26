import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserModel } from './user.model';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorsService } from '../errors/errors.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, errorSrvc) {
        this.http = http;
        this.errorSrvc = errorSrvc;
    }
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5000/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5000/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    return AuthService;
}());
export { AuthService };
