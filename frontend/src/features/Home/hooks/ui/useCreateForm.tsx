import type { UrlFormValues } from "../../../../schema/url.schema"
import { useForm, useWatch} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clientUrlSchema from "../../../../schema/url.schema";
import useCreateUrl from "../server/useCreateUrl";
import { toast } from "sonner";

const useCreateForm = () => {
  
    const {control,handleSubmit,reset,watch,register,formState:{errors}} = useForm<UrlFormValues>({

        resolver:zodResolver(clientUrlSchema), //connect zod with react-hook-form ,
        defaultValues:{
            originalUrl:""
        },
        mode:"onChange"
    })

    const url = useWatch({
        control,
        name:"originalUrl",
        defaultValue:""
    })

    const isInputEmpty = !url.trim();

    const {mutateAsync:CreateUrlMutation,isPending} = useCreateUrl();

    const onSubmit = async(data:UrlFormValues)=>{

        try{

            await toast.promise(CreateUrlMutation(data.originalUrl),{
                loading:"Shortening your url...",
                success:()=>{
                    reset();
                    return "Url shorten successfully"
                },
                error:(err)=> err.response?.data?.message || "Failed to shorten url"
            }).unwrap()

        }catch(err){
           console.log("Url creating failed : ",err);
        }
    }

    return {
        isPending,onSubmit,handleSubmit,register,errors,isInputEmpty
    }
}

export default useCreateForm
