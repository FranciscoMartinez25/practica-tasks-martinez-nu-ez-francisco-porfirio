import { matchedData } from "express-validator";
import { UserAptitudModel } from "../models/aptitud_user.js";
import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const validateData = matchedData(req) 

    const user = await UserModel.create(validateData);
    return res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const user = await UserModel.findAll({
        attributes: {
          exclude: ["user_id"],
        },
        //   attributes: ["title"],
        include: [
          {
            model: TaskModel,
            as: "tareas",
              // attributes: {
              //   exclude: ["title", "user_id"],
              // },
            // include: [
            //   {
            //     model: DirectionModel,
            //     as: "propietario",
            //   },
            // ],
          },
        ],
      });

      return res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findOne({
        attributes: {
          exclude: ["user_id"],
        },
        //   attributes: ["title"],
        include: [
          {
            model: TaskModel,
            as: "tareas",
            // attributes: {
            //   exclude: ["title", "user_id"],
            // },
            include: [
              {
                model: DirectionModel,
                as: "propietario",
              },
            ],
          },
        ],
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {

    const validateData = matchedData(req)

    const [updated] = await User.update(validateData, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Usuario eliminado" });
    else res.status(404).json({ message: "Usuario no encontrado " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};