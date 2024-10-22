import { StaticImageData } from "next/image";


export interface IGalleryCard {
    id: string | number;
    title: string;
    href: string | StaticImageData;
}
