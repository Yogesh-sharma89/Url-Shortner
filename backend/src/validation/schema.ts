import {  z } from "zod";

export const safeUrlSchema = z.object({
    originalUrl: z.string()
        .trim()
        .min(1, "Url can't be empty")

        //for mailcious srcipt in url
        .refine((value) => !/<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(value), {
            message: "Malicious script tags detected. Upload blocked"
        })


        .transform((val, ctx) => {
            try {

                const parsedUrl = new URL(val);

                const allowedprotocols = ["http:", "https:"];

                if (!allowedprotocols.includes(parsedUrl.protocol)) {
                    ctx.addIssue({
                        code: "custom",
                        message: "Only http and https protocols are permitted.",
                    })
                    return z.NEVER;
                }

                return parsedUrl.toString();

            } catch (err) {
                ctx.addIssue({
                    code: "custom",
                    message: "Invalid URL structure. Cannot parse address string.",
                });
                return z.NEVER;
            }
        })
})


export const safeShortCode = z.object({
    shortCode:z.string()
    .trim()
    .length(6,{message:"Short code must be exactly 6 characters long"})
    .regex(/^[a-zA-Z0-9]+$/,{
        message:"Short code must contain alphanumeric characters only"
    })
})

export type safeCodeType = z.infer<typeof safeShortCode>;

export type safeUrlType  = z.infer<typeof safeUrlSchema>;