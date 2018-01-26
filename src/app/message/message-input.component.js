import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { NgForm } from '@angular/forms';
import { MessageModel } from './message.model';
var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent(messageSrvc) {
        this.messageSrvc = messageSrvc;
    }
    MessageInputComponent.prototype.onSubmit = function (formObj) {
        if (this.message) {
            this.message.content = formObj.value.content;
            this.messageSrvc.updateMessage(this.message)
                .subscribe(
            // data => console.log('This is Success'),
            // error => console.log('This is Error')
            // data => console.log('This is Success'),
            // error => console.log('This is Error')
            function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            var message = new MessageModel(formObj.value.content, 'Heller');
            this.messageSrvc.addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        formObj.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSrvc.editEventEmmiter.subscribe(function (message) { return _this.message = message; });
    };
    return MessageInputComponent;
}());
export { MessageInputComponent };
