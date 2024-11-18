import { ISessionCard } from "@entities/";


export interface ISessionPage {
    documentId: string;
    title: string;
    sessionImages: ISessionCard[];
}
