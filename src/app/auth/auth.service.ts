import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserModel } from './user.model';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorsService } from '../errors/errors.service';

@Injectable()
export class AuthService {

  constructor(private http: Http, private errorSrvc: ErrorsService) { }

  signUp(user: UserModel) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:5000/user', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorSrvc.handleError(error.json());
         return Observable.throw(error.json());
        });
  }

  signIn(user: UserModel) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:5000/user/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorSrvc.handleError(error.json());
         return Observable.throw(error.json());
        });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
