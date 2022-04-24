import express from "express";
import Todo from "../Schemas/Todo.js";

const todosRouter = express.Router();

todosRouter.post("/", async (req, res) => {
  await Todo.create(req.body);
  res.send("Todo created");
});

todosRouter.get("/folder/:folderId", async (req, res) => {
  const folderId = req.params.folderId;
  const todos = await Todo.findAll({ where: { folderId: folderId } });
  res.send(todos);
});

todosRouter.put("/:id", async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findOne({ where: { id: todoId } });
  if (!todo) {
    res.status(404).send("Todo not found");
  } else {
    todo.text = req.body.text;
    await todo.save();
    res.send("Todo updated");
  }
});

todosRouter.delete("/:id", async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findOne({ where: { id: todoId } });
  if (!todo) {
    res.status(404).send("Todo not found");
  } else {
    await Todo.destroy({ where: { id: todoId } });
    res.send("Todo deleted");
  }
});

export default todosRouter;
