import { PayloadTypeEnum } from './payload-type.enum';


export interface BasePayloadModel {
    PayloadType: PayloadTypeEnum;
    SendTime: Date;
}
