import { BasePayloadModel } from './base-payload.model';
import { UserModel } from './user-model.model';

export interface MessagePayloadModel extends BasePayloadModel {
    Message: string;
}
