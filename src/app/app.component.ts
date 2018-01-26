import { Component } from '@angular/core';
import { MessageService } from './message/message.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'heller-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'heller';

  }

