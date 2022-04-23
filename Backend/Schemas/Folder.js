import { Model, DataTypes } from "sequelize";
import sequelize from "../Data/database.js";

class Folder extends Model {}

Folder.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "folder",
    timestamps: false,
  }
);

export default Folder;
