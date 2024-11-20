export interface IStudentWork {
    documentId: string;
    title: string;
    workImage: {
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText: string;
    }
}
