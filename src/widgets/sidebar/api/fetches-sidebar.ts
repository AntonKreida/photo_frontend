import { instance, TResponseData } from "@shared/";

import { IEducation } from "../interfaces";


const withSidebarGetEducationQueryDocument = `
    query getEducations {
        educations {
            documentId
            title
            path
        }
    }
`;

export const getEducations = async () => {
  const response = await instance.post<TResponseData<{ educations: IEducation[]}>>
  (`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    query: withSidebarGetEducationQueryDocument,
  });
  return response.data.data.educations;
};
