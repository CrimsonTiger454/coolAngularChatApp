import { BasePayloadModel } from './base-payload.model';
import { UserModel } from './user-model.model';

export interface NewUserModel extends BasePayloadModel {
    User: UserModel;
}
