import express from "express";
import {
  handleEdit,
  handleDelete,
  handleLogout,
  handleSee,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);
userRouter.get("/logout", handleLogout);
userRouter.get(":id", handleSee);

export default userRouter;
