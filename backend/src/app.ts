import express from 'express';
import urlRouter from './routes/url.route.js';
import GlobalErrorhandler from './middleware/errorHandler.js';
import { handleRedirect } from './controllers/url.controller.js';
import cors from 'cors';
import EnvConfig from './config/env.config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:[EnvConfig.clientUrl!],
    methods:["GET","PUT","POST","DELETE","PATCH"],
    credentials:true
}))


//routes
app.use("/api/urls",urlRouter);

app.get("/api/health",(_req,res)=>{
    res.json({
        success:true,
        message:"Server is running properly",
    })
})

app.get("/:shortCode",handleRedirect)


//global error handler
app.use(GlobalErrorhandler);


export   default app;