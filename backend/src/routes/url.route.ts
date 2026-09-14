import { Router } from "express";
import { CreateUrl, DeleteUrl } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/",CreateUrl);
urlRouter.delete("/:urlId",DeleteUrl)

export default urlRouter;