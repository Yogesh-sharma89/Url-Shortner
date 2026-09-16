import api from "../../../utils/axios";

const DeleteUrlApi = async(urlId:string)=>{
    
    if(!urlId || !urlId.trim()){
        console.log("Invalid url id ");
        return;
    }

    try{
        const res  = await api.delete(`/${urlId}`);
        return res.data;

    }catch(err){
        console.log("Error in delete url api :",err);
        throw err;
    }
}

export default DeleteUrlApi;