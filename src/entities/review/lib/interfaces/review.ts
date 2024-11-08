import { IImage } from "@shared/";


export interface IReview {
    id: number;
    isActiveReview: boolean;
    author: string;
    description: string;
    image?: IImage;
}
