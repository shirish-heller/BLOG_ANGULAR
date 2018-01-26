import { NgModule } from "@angular/core";
import { MessageService } from "./message.service";
import { MessageInputComponent } from "./message-input.component";
import { MessageListComponent } from "./message-list.component";
import { MessageComponent } from "./message.component";
import { MessagesComponent } from "./messages.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MessageInputComponent,
        MessageListComponent,
        MessageComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]
})

export class MessageModule {}
