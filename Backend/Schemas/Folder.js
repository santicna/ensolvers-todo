import { Model, DataTypes } from "sequelize";
import sequelize from "../Data/database.js";
import Todo from "./Todo.js";

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

Folder.hasMany(Todo, { onDelete: "CASCADE" });

export default Folder;
