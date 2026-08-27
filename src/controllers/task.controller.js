import { TaskModel } from "../models/task.model.js";


export const createTask = async (req, res) => {
  try {
    
    const validateData = matchedData(req)

    const task = await Task.create(validateData);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll({
      attributes: {
        exclude: ["user_id"],
      },
      //   attributes: ["title"],
      include: [
        {
          model: UserModel,
          as: "author",
          attributes: {
            exclude: ["password", "user_id"],
          },
          include: [
            {
              model: DirectionModel,
              as: "propietario",
            },
          ],
        },
      ],
    });
    return res.status(201).json(tasks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const tasks = await TaskModel.findOne({
      attributes: {
        exclude: ["user_id"],
      },
      //   attributes: ["title"],
      include: [
        {
          model: UserModel,
          as: "author",
          attributes: {
            exclude: ["password", "user_id"],
          },
          include: [
            {
              model: DirectionModel,
              as: "propietario",
            },
          ],
        },
      ],
    });} catch (err) {
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