import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";
import { validate } from "../middlewares/validate.js";
import { createTaskValidation, updateTaskValidation } from "../middlewares/validations/task.validation.js";

export const taskRouter = Router();

//obtener todos las tareas}
taskRouter.get("/tasks", getAllTasks);

taskRouter.post("/tasks", createTask, validate, createTaskValidation);

taskRouter.get("/tasks/:id", getTaskById);

taskRouter.put("/tasks/:id", updateTask, validate, updateTaskValidation);

taskRouter.delete("/tasks/:id", deleteTask);