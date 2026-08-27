import { body, param } from "express-validator";

export const createUserValidation = [
  body("name").notEmpty().withMessage("El name no debe ser vacio"),
  body("email")
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido"),
  body("password").notEmpty().withMessage("La password no debe ser vacia"),

];

export const updateUserValidation = [
  body("name").optional().notEmpty().withMessage("El name no debe ser vacio"),
  body("email")
    .optional() 
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido"),
  body("password").optional().isEmpty().withMessage("La password no debe ser vacia"),
];