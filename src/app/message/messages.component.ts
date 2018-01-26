import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heller-messages',
  template: `
      <div class="row">
        <heller-message-input></heller-message-input>
      </div>
      <hr>
      <div class="row">
        <heller-message-list></heller-message-list>
      </div>

  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
