import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user-model.model';
import {DatCoolChatClientService} from '../../services/dat-cool-chat-client.service';
import {NewUserModel} from '../../models/new-user-payload.model';
import {PayloadTypeEnum} from '../../models/payload-type.enum';

@Component({
  selector: 'app-global-connected-users',
  templateUrl: './global-connected-users.component.html',
  styleUrls: ['./global-connected-users.component.css']
})
export class GlobalConnectedUsersComponent implements OnInit {

  users: UserModel[];
  userName: string;

  constructor(public datCoolChatService: DatCoolChatClientService) {
  }


  ngOnInit() {
    this.datCoolChatService.connectedUsersEventEmitter.subscribe((payload) => {
      console.log('track active Users. Refresh is RoomId is global', payload);
      this.users = payload.Users;
    });
  }

  setUserName() {
    const payload = <NewUserModel>{
      PayloadType: PayloadTypeEnum.NewUser,
      User: <UserModel>{
        Id: this.datCoolChatService.userId,
        Name: this.userName
      }
    };
    console.log('set user name payload', payload);
    this.datCoolChatService.sendMessage(payload);
  }
}
