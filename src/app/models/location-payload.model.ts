import { BasePayloadModel } from './base-payload.model';
import { UserModel } from './user-model.model';

export interface LocationPayloadModel extends BasePayloadModel {
    User: UserModel;
    LocationId: string;
}
