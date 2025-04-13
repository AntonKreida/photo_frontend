import { ISessionCard } from "@entities/";


export interface ISessionPage {
    documentId: string;
    sessionImages: ISessionCard[];
    title?: string;
}
