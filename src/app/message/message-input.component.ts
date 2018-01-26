import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { NgForm } from '@angular/forms';
import { MessageModel } from './message.model';

@Component({
  selector: 'heller-message-input',
  templateUrl: './message-input.component.html',
  styles: [
    `input.ng-invalid.ng-touched {
      border: 1px solid red;
  }
    `]
})
export class MessageInputComponent implements OnInit {

  message: MessageModel;
  constructor(private messageSrvc: MessageService) {}

  onSubmit(formObj: NgForm) {

    if (this.message) {
        this.message.content = formObj.value.content;
        this.messageSrvc.updateMessage(this.message)
        .subscribe(
          // data => console.log('This is Success'),
          // error => console.log('This is Error')
          result => console.log(result)
        );
        this.message = null;
    } else {
      const message = new MessageModel (formObj.value.content, 'Heller');
      this.messageSrvc.addMessage(message)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    }

    formObj.resetForm();
  }

  onClear(form: NgForm) {
    this.message = null;
    form.resetForm();
  }

  ngOnInit() {
    this.messageSrvc.editEventEmmiter.subscribe(
      (message: MessageModel) => this.message = message
    );
  }

}
