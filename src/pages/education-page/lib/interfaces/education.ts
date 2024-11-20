export interface IEducation {
    documentId: string;
    title: string;
    subTitle?: string;
    titleImage: {
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText: string;
    }
}
