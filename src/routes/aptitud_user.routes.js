import { Router } from "express";
import {
  createAptitudUser,
  getAllAptitudesUsers,
} from "../controllers/aptitud_user.controller.js";

export const aptitudUserRouter = Router();

aptitudUserRouter.get("/aptitud_user", getAllAptitudesUsers);

aptitudUserRouter.post("/aptitud_user", createAptitudUser);