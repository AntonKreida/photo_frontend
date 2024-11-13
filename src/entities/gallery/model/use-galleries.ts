import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "/src/shared"
import { getGalleries } from "../api/fetches-gallery"

export const useGalleries = (pathname: string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.GALLERY, pathname],
        queryFn: () => getGalleries(pathname),
        placeholderData: (prev) => prev,
    })


    return {
        galleries: data ?? [],
        isLoading,
        isError
    }
}
