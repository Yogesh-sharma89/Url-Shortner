import api from "../../../utils/axios";

export const CreateUrlApi = async(url:string)=>{
    if(!url.trim()){
        console.log("URL is missing");
        return;
    }

    try{
        const response = await api.post("/api/urls",{originalUrl:url});

        return response.data.url;

    }catch(err:any){
        console.log("Error in create url api :",err.message);
        throw err;
    }
}
