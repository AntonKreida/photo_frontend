import { instance, TResponseData } from "@shared/";
import { IGallery } from "../lib";

const allGalleriesWithVariablesQueryDocument = (pathname: string) => `
    query getGalleries {
        ${pathname}Sessions {
            title
            titleImage {
                name
                url
                width
                height
                alternativeText
            }
            documentId
        }
    }
`
export const getGalleries = async (pathname: string) => {
  const { data } =  await instance
    .post<TResponseData<{ [pathname: string]: IGallery[] }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      operationName: "getGalleries",
      query: allGalleriesWithVariablesQueryDocument(pathname),
    });

  return data?.data[`${pathname}Sessions`];
}
