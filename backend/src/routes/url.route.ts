import { Router } from "express";
import { CreateUrl, DeleteUrl, GetAllUrls } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/",CreateUrl);
urlRouter.delete("/:urlId",DeleteUrl)
urlRouter.get("/",GetAllUrls)

export default urlRouter;