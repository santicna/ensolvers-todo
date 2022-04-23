import express from "express";
import Folder from "../Schemas/Folder.js";

const foldersRouter = express.Router();

foldersRouter.post("/", async (req, res) => {
  await Folder.create(req.body);
  res.send("Folder created");
});

foldersRouter.get("/", async (req, res) => {
  const folders = await Folder.findAll();
  res.send(folders);
});

foldersRouter.delete("/:id", async (req, res) => {
  const requestedId = req.params.id;
  const folder = await Folder.findOne({ where: { id: requestedId } });
  if (!folder) {
    res.status(404).send("Folder not found");
  } else {
    await Folder.destroy({ where: { id: requestedId } });
    res.send("Folder deleted");
  }
});

export default foldersRouter;
