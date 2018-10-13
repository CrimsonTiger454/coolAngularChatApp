import { BasePayloadModel } from "./base-payload.model";
import { UserModel } from "./user-model.model";

export interface ConnectedUserPayloadModel extends BasePayloadModel {
    users: UserModel[];
    roomid: string;
}