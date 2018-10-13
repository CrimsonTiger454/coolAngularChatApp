import { Injectable, EventEmitter } from '@angular/core';
import { ConnectedUserPayloadModel } from '../models/connected-users-payload.model';
import { NotifacationPayloadModel } from '../models/notifacation-payload.model';
import { LocationPayloadModel } from '../models/location-payload.model';
import { FileLockPayloadModel } from '../models/file-lock-payload.model';
import { MessagePayloadModel } from '../models/message-payload.model';
import { NewUserModel } from '../models/new-user-payload.model';

@Injectable({
  providedIn: 'root'
})
export class DatCoolChatClientService {

  connectedUsersEventEmitter: EventEmitter<ConnectedUserPayloadModel>;
  notifacationEventEmitter: EventEmitter<NotifacationPayloadModel>;
  locationEventEmitter: EventEmitter<LocationPayloadModel>;
  fileLockEventEmitter: EventEmitter<FileLockPayloadModel>;
  messageEventEmitter: EventEmitter<MessagePayloadModel>;
  newUserEventEmitter: EventEmitter<NewUserModel>;

  constructor() { }

}
