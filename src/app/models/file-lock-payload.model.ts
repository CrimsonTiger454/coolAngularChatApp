import { BasePayloadModel } from './base-payload.model';


export interface FileLockPayloadModel extends BasePayloadModel {
    FileId: string;
    IsLocked: boolean;
}
