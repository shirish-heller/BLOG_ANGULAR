import { Injectable, EventEmitter } from '@angular/core';
import { MessageModel } from './message.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorsService } from '../errors/errors.service';

@Injectable()
export class MessageService {
  messages: MessageModel[] = [];

constructor (private http: Http, private errorSrvc: ErrorsService) {}

editEventEmmiter = new EventEmitter<MessageModel>();

  addMessage(msg: MessageModel) {
    // this.messages.push(msg);
    const body = JSON.stringify(msg);
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    const headers = new Headers ({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:5000/message' + token, body, {headers: headers})
    .map((response: Response) => {
      const result = response.json();
      const message = new MessageModel (result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
      this.messages.push(message);
      return message;
    })
    .catch((error: Response) => {
    this.errorSrvc.handleError(error.json());
    return Observable.throw(error.json());
    });
  }

  getMessages() {
    // const headers = new Headers ({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:5000/message')
      .map((response: Response) => {
        const messages = response.json().resultMsgArr;
        let transformedMessages: MessageModel[] = [];

        for (let message of messages) {
          // console.log(message._id);
          transformedMessages.push(new MessageModel(message.content, message.user.firstName, message._id, message.user._id));
        }
        this.messages = transformedMessages;
        return transformedMessages;
      })
      .catch((error: Response) => {
        this.errorSrvc.handleError(error.json());
        return Observable.throw(error.json());
      });

  }


  editMessage(message: MessageModel) {
    this.editEventEmmiter.emit(message);
  }

  updateMessage(message: MessageModel) {
    const body = JSON.stringify(message);
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
    : '';
    const header = new Headers({'Content-Type': 'application/json'});
    console.log(message.messageId);

    return this.http.patch('http://localhost:5000/message/' + message.messageId + token, body, {headers: header})
    .map((response: Response) => response.json())
    .catch((error: Response) => {
      this.errorSrvc.handleError(error.json());
     return Observable.throw(error.json());
    });

  }

  // deleteMessage(message) {

  //   this.messages.splice(this.messages.indexOf(message), 1);
  //   // const id = this.messages[index].messageId;
  //   console.log(message.messageId);
  //   return this.http.delete('http://localhost:5000/message/' + message.messageId)
  //   .map((response: Response) => response.json())
  //   .catch((error: Response) => Observable.throw(error.json()));
  // }
  deleteMessage(index) {
    const id = this.messages[index].messageId;
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
    : '';
    if (token !== '') {
      this.messages.splice(index, 1);
    }
    return this.http.delete('http://localhost:5000/message/' + id + token)
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorSrvc.handleError(error.json());
         return Observable.throw(error.json());
        });

}
}
