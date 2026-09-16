import { useQuery } from "@tanstack/react-query"
import GetAllUrlsApi from "../../api/getUrls"


const useGetUrls = () => {
    return useQuery({
        queryKey:["urls"],
        queryFn:GetAllUrlsApi,
         
        refetchOnWindowFocus:true,
        refetchOnReconnect:true,
        refetchOnMount:true
    })
}


export default useGetUrls
