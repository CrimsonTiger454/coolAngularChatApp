import {EventEmitter, Injectable} from '@angular/core';
import {ConnectedUserPayloadModel} from '../models/connected-users-payload.model';
import {NotificationPayloadModel} from '../models/notification-payload.model';
import {LocationPayloadModel} from '../models/location-payload.model';
import {FileLockPayloadModel} from '../models/file-lock-payload.model';
import {MessagePayloadModel} from '../models/message-payload.model';
import {NewUserModel} from '../models/new-user-payload.model';
import {WebSocketSubject} from 'rxjs/webSocket';
import {BasePayloadModel} from '../models/base-payload.model';
import {PayloadTypeEnum} from '../models/payload-type.enum';
import {MePayloadModel} from '../models/me-payload.model';

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

  userId: string;

  private readonly socket: WebSocketSubject<BasePayloadModel>;

  constructor() {
    this.socket = new WebSocketSubject<BasePayloadModel>('ws://localhost:50253/api/websocket');
    console.log('socket', this.socket);
    this.socket.subscribe(
      (payload: BasePayloadModel) => {
        console.log('payload in service', payload);
        this.handlePayload(payload);
      }
    );
  }

  sendMessage(payload: BasePayloadModel) {
    console.log('sending message', payload);
    this.socket.next(payload);
  }

  private handlePayload(payload: BasePayloadModel) {
    switch (<PayloadTypeEnum>payload.PayloadType) {
      case PayloadTypeEnum.ConnectedUsers:
        console.log('emitting', PayloadTypeEnum.ConnectedUsers);
        this.connectedUsersEventEmitter.emit(<ConnectedUserPayloadModel>payload);
        break;
      case PayloadTypeEnum.Filelock:
        console.log('emitting', PayloadTypeEnum.Filelock);
        this.fileLockEventEmitter.emit(<FileLockPayloadModel>payload);
        break;
      case PayloadTypeEnum.Message:
        console.log('emitting', PayloadTypeEnum.Message);
        this.messageEventEmitter.emit(<MessagePayloadModel>payload);
        break;
      case PayloadTypeEnum.Notification:
        console.log('emitting', PayloadTypeEnum.Notification);
        this.notificationEventEmitter.emit(<NotificationPayloadModel>payload);
        break;
      case PayloadTypeEnum.Me:
        this.userId = (<MePayloadModel>payload).Id;
        break;
      default:
        console.log('default', PayloadTypeEnum);
        console.log('PayloadType', payload.PayloadType);
    }
  }

}
