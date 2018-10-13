import { Component, OnInit } from '@angular/core';
import { DatCoolChatClientService } from './services/dat-cool-chat-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coolNgChatApp';

  constructor(private datCoolChatService: DatCoolChatClientService) {}

  ngOnInit() {
    this.datCoolChatService.notifacationEventEmitter.subscribe(() => {
      console.log('toast!');
    })
  }
}
