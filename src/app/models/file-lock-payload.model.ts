import { BasePayloadModel } from './base-payload.model';
import { UserModel } from './user-model.model';


export interface FileLockPayloadModel extends BasePayloadModel {
    Field: string;
    IsLocked: boolean;
}
