import {Injectable, EventEmitter} from '@angular/core';
import {ConnectedUserPayloadModel} from '../models/connected-users-payload.model';
import {NotificationPayloadModel} from '../models/notification-payload.model';
import {LocationPayloadModel} from '../models/location-payload.model';
import {FileLockPayloadModel} from '../models/file-lock-payload.model';
import {MessagePayloadModel} from '../models/message-payload.model';
import {NewUserModel} from '../models/new-user-payload.model';
import {WebSocketSubject} from 'rxjs/webSocket';
import {BasePayloadModel} from '../models/base-payload.model';

@Injectable({
  providedIn: 'root'
})
export class DatCoolChatClientService {

  connectedUsersEventEmitter = new EventEmitter<ConnectedUserPayloadModel>();
  notificationEventEmitter = new EventEmitter<NotificationPayloadModel>();
  locationEventEmitter = new EventEmitter<LocationPayloadModel>();
  fileLockEventEmitter = new EventEmitter<FileLockPayloadModel>();
  messageEventEmitter = new EventEmitter<MessagePayloadModel>();
  newUserEventEmitter = new EventEmitter<NewUserModel>();

  private socket: WebSocketSubject<BasePayloadModel>;

  constructor() {
    this.socket = new WebSocketSubject<BasePayloadModel>('ws://localhost:50253/api/websocket');
    this.socket.subscribe(
      payload => {
        console.log('payload is', payload);
      }
    );
  }

}
