import { PayloadTypeEnum } from './payload-type.enum';
import {UserModel} from './user-model.model';


export interface BasePayloadModel {
    PayloadType: PayloadTypeEnum;
    SendTime: Date;
    From: UserModel;
}
