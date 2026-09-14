import type { Document } from "mongoose";

export interface IURL extends Document{
    originalUrl:string,
    shortCode:string,
    clicks:number
}