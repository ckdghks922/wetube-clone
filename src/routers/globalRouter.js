import express from "express";
import { handleJoin } from "../controllers/userController";
import { handleHome } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;
