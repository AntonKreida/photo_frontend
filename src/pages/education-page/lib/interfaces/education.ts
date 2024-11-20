import { IStudentWork } from "@widgets/";


export interface IEducation {
    documentId: string;
    title: string;
    subTitle?: string;
    description: string;
    price: number;
    student_works: IStudentWork[]
    titleImage: {
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText: string;
    }
}
