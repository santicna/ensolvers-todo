import { Model, DataTypes } from "sequelize";
import sequelize from "../Data/database.js";

class Todo extends Model {}

Todo.init(
  {
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "todo",
    timestamps: false,
  }
);

export default Todo;
