import { StaticImageData } from "next/image";


export interface ICardPhoto {
    id: number | string;
    title: string;
    href: string | StaticImageData;
}
