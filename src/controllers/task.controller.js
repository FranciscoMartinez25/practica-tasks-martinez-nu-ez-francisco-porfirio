import { Task } from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    if (!title || !description || !isComplete) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const task = await Task.create({
        title,
        description,
        isComplete,
    });

    res.status(201).json({
      message: "Tarea creada correctamente",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};