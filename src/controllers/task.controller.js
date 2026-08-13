import { ModelTask } from "../models/task.model.js";


export const createTask = async (req, res) => {
  try {
    const { title, description, isComplete} = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    if (title.trim().length > 100) {
      return res.status(400).json({ message: "El título no puede exceder los 100 caracteres" });
    }
    if (description.trim().length > 100) {
      return res.status(400).json({ message: "La descripción no puede exceder los 255 caracteres" });
    }
    if(isComplete!==undefined && typeof isComplete!=="boolean") {
      return res.status(400).json({ message: "El campo isComplete debe ser un valor booleano" });
    }

    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ message: "Tarea no encontrada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Tarea eliminada" });
    else res.status(404).json({ message: "Tarea no encontrada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};