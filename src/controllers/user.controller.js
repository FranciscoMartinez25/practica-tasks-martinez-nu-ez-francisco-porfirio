import { ModelUser } from "../models/user.model.js";


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

    const user = await User.create(req.body);
    return res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "Usuario no encontrado" });
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