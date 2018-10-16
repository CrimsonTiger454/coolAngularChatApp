import {Component, OnInit} from '@angular/core';
import {MessagePayloadModel} from '../../models/message-payload.model';
import {DatCoolChatClientService} from '../../services/dat-cool-chat-client.service';
import {PayloadTypeEnum} from '../../models/payload-type.enum';

@Component({
  selector: 'app-chat-tab',
  templateUrl: './chat-tab.component.html',
  styleUrls: ['./chat-tab.component.css']
})
export class ChatTabComponent implements OnInit {

  messages: MessagePayloadModel[] = [];
  message: string;

  constructor(private datCoolChatService: DatCoolChatClientService) {
    datCoolChatService.messageEventEmitter.subscribe(
      (payload: MessagePayloadModel) => {
        this.messages.push(payload);
      }
    );
  }

  ngOnInit() {
    this.datCoolChatService.messageEventEmitter.subscribe(() => {
      console.log('update chat on message event');
    });
  }

  sendMessage() {
    const payload = <MessagePayloadModel>{
      PayloadType: PayloadTypeEnum.Message,
      Message: this.message
    };
    this.datCoolChatService.sendMessage(payload);
    payload.From = {
      Id: this.datCoolChatService.userId,
      Name: 'Me'
    };
    this.messages.push(payload);
  }
}
