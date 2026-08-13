import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";

export const taskRouter = Router();

//obtener todos las tareas
taskRouter.get("/tasks", getAllTasks);

taskRouter.post("/tasks", createTask);

taskRouter.get("/tasks/:id", getTaskById);

taskRouter.put("/tasks/:id", updateTask);

taskRouter.delete("/tasks/:id", deleteTask);