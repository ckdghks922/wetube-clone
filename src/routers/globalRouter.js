import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { handleHome, handleSearch } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;
