import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model.model';
import { DatCoolChatClientService } from '../../services/dat-cool-chat-client.service';

@Component({
  selector: 'app-global-connected-users',
  templateUrl: './global-connected-users.component.html',
  styleUrls: ['./global-connected-users.component.css']
})
export class GlobalConnectedUsersComponent implements OnInit {

users: UserModel[];

constructor(private datCoolChatService: DatCoolChatClientService) {}


ngOnInit() {
  this.datCoolChatService.connectedUsersEventEmitter.subscribe(() => {
    console.log('track active users. Refresh is roomid is global');
    })
  }
}
