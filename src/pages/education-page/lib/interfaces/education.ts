export interface IEducation {
    documentId: string;
    title: string;
    subTitle?: string;
    description: string;
    price: number;
    titleImage: {
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText: string;
    }
}
