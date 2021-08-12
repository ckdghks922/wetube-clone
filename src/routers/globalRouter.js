import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => {
  return res.send("Home");
};

const handleJoin = (req, res) => {
  return res.send("Join");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;
