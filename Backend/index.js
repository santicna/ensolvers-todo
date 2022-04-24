import express from "express";
import sequelize from "./Data/database.js";
import foldersRouter from "./Routes/Folders.js";
import todosRouter from "./Routes/Todos.js";
import cors from "cors";

sequelize.sync().then(() => console.log("db is ready"));

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/folders", foldersRouter);
app.use("/api/todos", todosRouter);

app.listen(3000, () => {
  console.log("app is running");
});
