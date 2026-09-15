import { useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteUrlApi from "../../api/deleteUrl"


const useDeleteUrl = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:["delete-url"],
        mutationFn:(urlId:string)=>DeleteUrlApi(urlId),

        onSuccess:()=>{
          
            queryClient.invalidateQueries({
                queryKey:["urls"]
            })
        }
    })
  
}

export default useDeleteUrl
