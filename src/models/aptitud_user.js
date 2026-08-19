import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";
import { AptitudModel } from "./aptitud.model.js";

export const UserAptitudModel = sequelize.define(
  "User_Aptitud",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    timestamps: false,
  },
);

// relaciones
// relacion muchos a muchos
UserModel.belongsToMany(AptitudModel, {
  through: UserAptitudModel,
  foreignKey: "user_id",
  as: "aptitudes",
});

AptitudModel.belongsToMany(UserModel, {
  through: UserAptitudModel,
  foreignKey: "aptitud_id",
  as: "users",
});