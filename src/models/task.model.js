import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const TaskModel = sequelize.define(
  "Task",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      reference:{
        model:"User",
        key:"id"
      }
    }
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    timestamps: false,
  },
);

TaskModel.belongsTo(UserModel, { foreignKey: "user_id", as:"propietario" , onDelete:"CASCADE"}); 
UserModel.hasMany(TaskModel, { foreignKey: "user_id", as:"tareas" });