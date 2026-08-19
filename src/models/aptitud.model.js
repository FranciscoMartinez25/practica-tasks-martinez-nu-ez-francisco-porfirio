import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const AptitudModel = sequelize.define(
  "Aptitud",
  {
    // Model attributes are defined here
    nameAptitud: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    timestamps: false,
  },
);

