import { Component, Input} from '@angular/core';
import { MessageModel} from './message.model';
import { MessageService } from './message.service';
@Component({
  selector: 'heller-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() messageChild: MessageModel;

  constructor (private messageService: MessageService) {}
  OnEdit() {
    this.messageService.editMessage(this.messageChild);
  }
  // OnDelete() {
  //   this.messageService.deleteMessage(this.messageChild)
  //   .subscribe(
  //     result => console.log(result)
  //   );

  // }
  OnDelete() {
    console.log('These are the messages just before delete');
    console.log(this.messageService.messages);
    this.messageService.deleteMessage(this.messageService.messages.indexOf(this.messageChild))
        .subscribe(
            result => console.log(result)
        );
}

belongsToUser() {
  console.log(localStorage.getItem('userId'));
  console.log(this.messageChild.userId);
  return localStorage.getItem('userId') === this.messageChild.userId;
}
}
