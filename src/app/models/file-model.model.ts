import { BasePayloadModel } from "./base-payload.model";

export interface FileModel extends BasePayloadModel {
    id: string;
    name: string;
}