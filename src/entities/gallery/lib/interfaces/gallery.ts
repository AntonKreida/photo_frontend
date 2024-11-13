export interface IGallery {
    title: string;
    documentId: string;
    titleImage: {
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText: string;
    }
}
