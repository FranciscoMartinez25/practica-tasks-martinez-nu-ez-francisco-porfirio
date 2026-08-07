import { Router } from "express";
import {
  createTask,
  getAllTasks,
} from "../controllers/task.controller.js";

export const taskRouter = Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", createTask);