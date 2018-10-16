import { Component, OnInit } from '@angular/core';
import { DatCoolChatClientService } from './services/dat-cool-chat-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coolNgChatApp';

  constructor(private datCoolChatService: DatCoolChatClientService) {}

  ngOnInit() {
    this.datCoolChatService.notificationEventEmitter.subscribe(() => {
      console.log('toast!');
    });
  }
}
