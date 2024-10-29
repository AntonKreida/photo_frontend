import { ENUM_PRICE_TYPE } from "../enum";


export interface IPrice {
    id: number;
    title: string;
    count: number;
    type: ENUM_PRICE_TYPE;
    description: string;
}
