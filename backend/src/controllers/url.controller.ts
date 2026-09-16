
import EnvConfig from "../config/env.config.js";
import asyncHandler from "../middleware/asyncHandler.js";
import UrlModel from "../models/url.model.js";
import { AppError } from "../utils/appError.js";
import GenerateShortCode from "../utils/generateCode.js";
import { safeShortCode, safeUrlSchema } from "../validation/schema.js";

export const CreateUrl = asyncHandler(async (req, res) => {

    const result = safeUrlSchema.safeParse(req.body);

    if (!result.success) {
        throw new AppError(400, "Invalid url detected");
    }

    const { originalUrl } = result.data;

    const existingMapping  = await UrlModel.findOne({originalUrl}).lean();

    if(existingMapping){

        const link = `${EnvConfig.baseUrl}/${existingMapping.shortCode}`

        return res.status(200).json({
            success:true,
            message: "Existing short URL retrieved successfully",
            shortLink:link,
            data:existingMapping
        })
    }

    let shortCode = GenerateShortCode(6);

    //check if this shortcode already exists
    let existingCode = await UrlModel.findOne({ shortCode }).select("_id").lean();


    //In this We should try to retry with some attempts;
    let isUnique = false;
    let maxAttempts = 3;

    if (existingCode) {

        if (!isUnique && maxAttempts > 0) {

            shortCode = GenerateShortCode(6);

            existingCode = await UrlModel.findOne({ shortCode }).select("_id").lean()
            if (!existingCode) {
                isUnique = true;
            }

            maxAttempts--;
        }

        if (!isUnique) {
            //give me res or thorw err
            throw new AppError(500, "Server failed to allocate a unique short link slot. Please try your request again.");
        }

    }


    const newUrl = await UrlModel.create({
        originalUrl,
        shortCode,
        clicks: 0
    })

    return res.status(201).json({
        success: true,
        message: "Url generated successfully",
        url: newUrl
    })
})

export const handleRedirect = asyncHandler(async (req, res) => {

    const { shortCode } = req.params as { shortCode: string };

    //validate the short code 
    const result = safeShortCode.safeParse({shortCode});

    if (!result.success) {
        throw new AppError(400, result.error.message || "This url is invalid or broken")
    }

    const urlRecord = await UrlModel.findOne({ shortCode:result.data.shortCode });

    if (!urlRecord) {
        throw new AppError(404, "Oops! The link you clicked doesn't exist. Please check the spelling and try again.")
    }

    //then update the db 
   await  UrlModel.updateOne({ _id: urlRecord._id }, {
        $inc: { clicks: 1 }
    })


    //redirect with location header
    return res.status(302).redirect(urlRecord.originalUrl)
})

export const DeleteUrl = asyncHandler(async (req, res) => {

    const {urlId} = req.params as {urlId:string};

    const validUrlId =typeof urlId === "string" ? urlId.trim() : "";

    if(!validUrlId){
        throw new AppError(400,"Invalid url Id");
    }

    //find the url bases on Id 
    const existingUrl = await UrlModel.findById(validUrlId);

    if(!existingUrl){
        throw new AppError(404,"This url doesn't exists")
    }

    //delete that 
    await UrlModel.deleteOne({_id:validUrlId});

    return res.status(200).json({
        success:true,
        message:"Url deleted successfully",
        urlId:validUrlId
    })
})


export const GetAllUrls = asyncHandler(async(_req,res)=>{

    const allUrls =await UrlModel.find({}).sort({createdAt:-1}).lean();

    const formattedUrls = allUrls.map((url)=>{
        return {
            ...url,
            shortLink:`${EnvConfig.baseUrl}/${url.shortCode}`,
            __v:undefined
        }
    })

    return res.status(200).json({
        success:true,
        message:"All urls fetched successfully",
        urls:formattedUrls
    })
})