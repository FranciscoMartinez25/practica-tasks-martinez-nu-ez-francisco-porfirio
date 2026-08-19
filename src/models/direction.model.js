
//calle
//numero

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const DirectionModel = sequelize.define(
  "Direction",
  {
    // Model attributes are defined here
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
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
 