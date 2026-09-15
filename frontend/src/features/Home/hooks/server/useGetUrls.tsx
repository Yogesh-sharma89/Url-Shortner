import { useQuery } from "@tanstack/react-query"
import GetAllUrlsApi from "../../api/getUrls"


const useGetUrls = () => {
    return useQuery({
        queryKey:["urls"],
        queryFn:GetAllUrlsApi,
        staleTime:1*60*60*1000, // 1hour,
        gcTime:0.5*60*60*1000, // half-hour 
        refetchOnWindowFocus:false,
        retry:1
    })
}


export default useGetUrls
