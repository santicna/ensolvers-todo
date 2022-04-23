import express from "express";
import sequelize from "./Data/database.js";
import foldersRouter from "./Routes/Folders.js";

sequelize.sync().then(() => console.log("db is ready"));

const app = express();
app.use(express.json());
app.use("/api/folders", foldersRouter);

app.listen(3000, () => {
  console.log("app is running");
});
