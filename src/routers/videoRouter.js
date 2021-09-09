import express from "express";
import {
  handleGetUpload,
  handlePostUpload,
  handleWatch,
  handleGetEdit,
  handlePostEdit,
  handleDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", handleWatch);
videoRouter.route("/upload").get(handleGetUpload).post(handlePostUpload);
videoRouter.route("/:id(\\d+)/edit").get(handleGetEdit).post(handlePostEdit);
videoRouter.get("/:id(\\d+)/delete", handleDelete);

export default videoRouter;
