import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model.model';
import { DatCoolChatClientService } from '../../services/dat-cool-chat-client.service';

@Component({
  selector: 'app-whos-here-tab',
  templateUrl: './whos-here-tab.component.html',
  styleUrls: ['./whos-here-tab.component.css']
})
export class WhosHereTabComponent implements OnInit {

  users: UserModel[];

  constructor(private datCoolChatService: DatCoolChatClientService) {}

  ngOnInit() {
    this.datCoolChatService.connectedUsersEventEmitter.subscribe(() => {
      console.log('if room is whoshere refresh');
      })
    }

}
