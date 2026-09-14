import mongoose from "mongoose";
import EnvConfig from "./env.config.js";

const ConnectDb = async()=>{
    try{
       await mongoose.connect(EnvConfig.db.url!);
       console.log("Database connected successfully ✅")
    }catch(err){
      console.log("error in connecting to db :",err);
    }
}

export default ConnectDb;