import { UserAptitudModel } from "../models/aptitud_user.js";
import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    if (name.trim().length > 100) {
      return res.status(400).json({ message: "El nombre no puede exceder los 100 caracteres" });
    }
    if (email.trim().length > 100) {
      return res.status(400).json({ message: "El email no puede exceder los 100 caracteres" });
    }
    if (password.length > 100) {
      return res.status(400).json({ message: "La contraseña no puede exceder los 100 caracteres" });
    }

    const user = await UserModel.create({ name, email, password });
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
    const [updated] = await User.update(req.body, {
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