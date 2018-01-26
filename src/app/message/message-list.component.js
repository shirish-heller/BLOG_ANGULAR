import { Component, OnInit } from '@angular/core';
import { MessageModel } from './message.model';
import { MessageService } from './message.service';
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
    }
    // tslint:disable-next-line:no-trailing-whitespace
    // tslint:disable-next-line:no-trailing-whitespace
    MessageListComponent.prototype.ngOnInit = 
    // tslint:disable-next-line:no-trailing-whitespace
    function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    return MessageListComponent;
}());
export { MessageListComponent };
