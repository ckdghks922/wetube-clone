import express from "express";
import {
  handleUpload,
  handleWatch,
  handleGetEdit,
  handlePostEdit,
  handleDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", handleUpload);
videoRouter.get("/:id(\\d+)", handleWatch);
videoRouter.route("/:id(\\d+)/edit").get(handleGetEdit).post(handlePostEdit);
videoRouter.get("/:id(\\d+)/delete", handleDelete);

export default videoRouter;
