import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { DirectionModel } from "./direction.model.js";

export const UserModel = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    // timestamps: false,
    paranoid: true
  },
);


UserModel.hasOne(DirectionModel, { foreignKey: "user_id", as:"direccion" });
DirectionModel.belongsTo(UserModel, { foreignKey: "user_id", as:"propietario" });