import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/users", getAllUsers);

userRouter.post("/users", createUser);

userRouter.get("/users/:id", getUserById);

userRouter.put("/users/:id", updateUser);

userRouter.delete("/users/:id", deleteUser);
