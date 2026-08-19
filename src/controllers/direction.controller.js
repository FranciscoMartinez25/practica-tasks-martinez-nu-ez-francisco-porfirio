import { DirectionModel } from "../models/direction.model.js";


export const createDirection = async (req, res) => {
  try {
    const {street, number} = req.body;

    if (!street || !number) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    if (street.trim().length > 100) {
      return res.status(400).json({ message: "La dirección no puede exceder los 100 caracteres" });
    }
    if (number.trim().length > 10) {
      return res.status(400).json({ message: "El número de calle no puede exceder los 10 caracteres" });
    }

    const direction = await DirectionModel.create({ street, number});
    res.status(201).json(direction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllDirections = async (req, res) => {
  try {
    const directions = await DirectionModel.findAll({
      attributes: ["id", "street", "number"],
      include: [
        {
          model: UserModel,
          as: "propietario",
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });
    return res.status(201).json(directions);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};