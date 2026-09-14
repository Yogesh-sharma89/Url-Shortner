import mongoose from "mongoose";
import type { IURL } from "../types/url.js";

const urlSchema = new mongoose.Schema<IURL>({

 originalUrl:{
    type:String,
    required:true,
    trim:true
 },
 shortCode:{
    type:String,
    required:true,
    trim:true,
    index:true
 },
 clicks:{
    type:Number,
    default:0
 }


},{
    timestamps:true
})

const UrlModel = mongoose.model<IURL>("url",urlSchema);

export default UrlModel;