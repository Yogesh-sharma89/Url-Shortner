import api from "../../../utils/axios";

const GetAllUrlsApi = async()=>{
    try{

        const res = await api.get("/");
        return res.data.urls;

    }catch(err){
        console.log("Error in get all urls api : ",err);
        throw err;
    }
}

export default GetAllUrlsApi;