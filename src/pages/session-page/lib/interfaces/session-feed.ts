import { ISessionCard } from "@entities/";


export interface ISessionFeed {
    documentId: string;
    title: string;
    sessionImages: ISessionCard[]
}
