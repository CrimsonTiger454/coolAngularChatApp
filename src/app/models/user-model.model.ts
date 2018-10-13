import { BasePayloadModel } from "./base-payload.model";


export interface UserModel extends BasePayloadModel {
    id: string;
    name: string;
}