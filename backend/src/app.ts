import express from 'express';
import urlRouter from './routes/url.route.js';
import GlobalErrorhandler from './middleware/errorHandler.js';
import { handleRedirect } from './controllers/url.controller.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


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