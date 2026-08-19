import { Router } from "express";
import {
  createDirection,
  getAllDirections,
} from "../controllers/direction.controller.js";

export const directionRouter = Router();

directionRouter.get("/direction", getAllDirections);

directionRouter.post("/direction", createDirection);