import { Component, Input } from '@angular/core';
import { MessageModel } from './message.model';
import { MessageService } from './message.service';
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.OnEdit = function () {
        this.messageService.editMessage(this.messageChild);
    };
    // OnDelete() {
    //   this.messageService.deleteMessage(this.messageChild)
    //   .subscribe(
    //     result => console.log(result)
    //   );
    // }
    // OnDelete() {
    //   this.messageService.deleteMessage(this.messageChild)
    //   .subscribe(
    //     result => console.log(result)
    //   );
    // }
    MessageComponent.prototype.OnDelete = 
    // OnDelete() {
    //   this.messageService.deleteMessage(this.messageChild)
    //   .subscribe(
    //     result => console.log(result)
    //   );
    // }
    function () {
        console.log('These are the messages just before delete');
        console.log(this.messageService.messages);
        this.messageService.deleteMessage(this.messageService.messages.indexOf(this.messageChild))
            .subscribe(function (result) { return console.log(result); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        console.log(localStorage.getItem('userId'));
        console.log(this.messageChild.userId);
        return localStorage.getItem('userId') === this.messageChild.userId;
    };
    return MessageComponent;
}());
export { MessageComponent };
