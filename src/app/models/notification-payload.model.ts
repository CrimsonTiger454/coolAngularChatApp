import { BasePayloadModel } from './base-payload.model';

export interface NotificationPayloadModel extends BasePayloadModel {
    notification: string;
}
