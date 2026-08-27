import { body } from "express-validator";

export const createTaskValidation = [
  body("title").notEmpty().withMessage("El title no debe ser vacio"),
  body("description").notEmpty().withMessage("La description no debe ser vacia").isLength({ max: 255 }),
  body("user_id").notEmpty().withMessage("El user_id no debe ser vacio"),
];

export const updateTaskValidation = [
  body("title").optional().notEmpty().withMessage("El title no debe ser vacio"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("La description no debe ser vacia")
    .isLength({ max: 255 }),
  body("task_id").optional().notEmpty().withMessage("El task_id no debe ser vacio"),
];