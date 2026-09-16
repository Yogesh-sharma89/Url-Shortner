import {z} from "zod";

const clientUrlSchema = z.object({

    originalUrl:z.string().trim()
    .min(1,"URL can't be empty")

    .max(2048,"URL is too long (maximum 2048 characters)")

    .refine((val)=>!/<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(val),{
        message:"Malicious script tags are strictly prohibited."
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
                    message: "Invalid URL structure",
                });
                return z.NEVER;
            }
        })

})


export default clientUrlSchema;

export type UrlFormValues = z.infer<typeof clientUrlSchema>;