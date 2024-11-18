import { ISlider } from "./slider";


export interface IHomePage {
    title: string;
    subTitle?: string;
    sliders: ISlider[];
}
