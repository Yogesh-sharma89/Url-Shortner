import express from 'express';
import urlRouter from './routes/url.route.js';
import GlobalErrorhandler from './middleware/errorHandler.js';
import { handleRedirect } from './controllers/url.controller.js';

import { fileURLToPath } from 'url';
import path from "path";

const app = express();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


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

// frontend path 
const frontendPath = path.join(_dirname,"../../frontend/dist");

app.use(express.static(frontendPath))

app.get("/home", (_req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});
//get route

app.get("/:shortCode",handleRedirect)

//react fallback 
app.get("/{*splat}",(_req,res)=>{
    res.sendFile(path.join(frontendPath,"index.html"))
})


//global error handler
app.use(GlobalErrorhandler);


export   default app;