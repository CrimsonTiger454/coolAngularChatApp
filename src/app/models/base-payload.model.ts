import { PayloadTypeEnum } from "./payload-type.enum";


export interface BasePayloadModel {
    messageType: PayloadTypeEnum;
    sendTime: Date;
}