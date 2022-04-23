import express from "express";
import sequelize from "./Data/database.js";

sequelize.sync().then(() => console.log("db is ready"));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("app is running");
});
