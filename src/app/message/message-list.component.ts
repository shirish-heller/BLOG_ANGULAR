import { Component, OnInit } from '@angular/core';
import { MessageModel } from './message.model';
import { MessageService } from './message.service';
@Component({
  selector: 'heller-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {
  messages: MessageModel[];

  constructor (private messageService: MessageService) {}

  // tslint:disable-next-line:no-trailing-whitespace
  ngOnInit() {  
    this.messageService.getMessages()
    .subscribe(
      (messages: MessageModel[]) => {
        this.messages = messages;
      });
  }
  // messages: MessageModel[] = [
  //   new MessageModel ('Some Message', 'Heller'),
  //   new MessageModel ('Second Message', 'Max'),
  //   new MessageModel ('Third Message', 'Shirish')
  //   ];

}
