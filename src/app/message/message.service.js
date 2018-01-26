import { Injectable, EventEmitter } from '@angular/core';
import { MessageModel } from './message.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorsService } from '../errors/errors.service';
var MessageService = /** @class */ (function () {
    function MessageService(http, errorSrvc) {
        this.http = http;
        this.errorSrvc = errorSrvc;
    }
    MessageService.prototype.addMessage = function (msg) {
        var _this = this;
        // this.messages.push(msg);
        var body = JSON.stringify(msg);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5000/message' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var message = new MessageModel(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(message);
            return message;
        })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        // const headers = new Headers ({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:5000/message')
            .map(function (response) {
            var messages = response.json().resultMsgArr;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                // console.log(message._id);
                transformedMessages.push(new MessageModel(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.editMessage = function (message) {
        this.editEventEmmiter.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        var header = new Headers({ 'Content-Type': 'application/json' });
        console.log(message.messageId);
        return this.http.patch('http://localhost:5000/message/' + message.messageId + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // deleteMessage(message) {
    //   this.messages.splice(this.messages.indexOf(message), 1);
    //   // const id = this.messages[index].messageId;
    //   console.log(message.messageId);
    //   return this.http.delete('http://localhost:5000/message/' + message.messageId)
    //   .map((response: Response) => response.json())
    //   .catch((error: Response) => Observable.throw(error.json()));
    // }
    // deleteMessage(message) {
    //   this.messages.splice(this.messages.indexOf(message), 1);
    //   // const id = this.messages[index].messageId;
    //   console.log(message.messageId);
    //   return this.http.delete('http://localhost:5000/message/' + message.messageId)
    //   .map((response: Response) => response.json())
    //   .catch((error: Response) => Observable.throw(error.json()));
    // }
    MessageService.prototype.deleteMessage = 
    // deleteMessage(message) {
    //   this.messages.splice(this.messages.indexOf(message), 1);
    //   // const id = this.messages[index].messageId;
    //   console.log(message.messageId);
    //   return this.http.delete('http://localhost:5000/message/' + message.messageId)
    //   .map((response: Response) => response.json())
    //   .catch((error: Response) => Observable.throw(error.json()));
    // }
    function (index) {
        var _this = this;
        var id = this.messages[index].messageId;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        if (token !== '') {
            this.messages.splice(index, 1);
        }
        return this.http.delete('http://localhost:5000/message/' + id + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorSrvc.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    return MessageService;
}());
export { MessageService };
