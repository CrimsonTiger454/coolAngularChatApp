import { Component, OnInit } from '@angular/core';
import { MessagePayloadModel } from '../../models/message-payload.model';
import { DatCoolChatClientService } from '../../services/dat-cool-chat-client.service';

@Component({
  selector: 'app-chat-tab',
  templateUrl: './chat-tab.component.html',
  styleUrls: ['./chat-tab.component.css']
})
export class ChatTabComponent implements OnInit {

  messages: MessagePayloadModel[];

  constructor(private datCoolChatService: DatCoolChatClientService) {
  
  }

  ngOnInit() {
    this.datCoolChatService.messageEventEmitter.subscribe(() => {
      console.log('update chat on message event');
      })
    }


}
