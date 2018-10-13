import { BasePayloadModel } from "./base-payload.model";
import { UserModel } from "./user-model.model";


export interface FileLockPayloadModel extends BasePayloadModel {
    user: UserModel;
    field: string;
    isLocked: boolean;
}