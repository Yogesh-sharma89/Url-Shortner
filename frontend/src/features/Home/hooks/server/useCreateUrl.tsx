import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateUrlApi } from "../../api/createUrl"


const useCreateUrl = () => {

    const queryClient = useQueryClient();
 
  return useMutation({
    mutationKey:['create-url'],
    mutationFn:(url:string)=>CreateUrlApi(url),

    onSuccess:()=>{
  
         queryClient.invalidateQueries({
            queryKey:['urls']
         })
    }
  })
}

export default useCreateUrl
