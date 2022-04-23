import React, { useEffect, useState } from "react";
import todoContext from "../../Components/Todos/TodoContext";
import { CreateTodo } from "../../Components/Todos/CreateTodo";
import { TodoList } from "../../Components/Todos/TodoList";
import { useLocation, useNavigate } from "react-router-dom";
import { getTodos, addTodo, deleteTodo } from "../../Services/TodosApi";
import toast, { Toaster } from "react-hot-toast";

export const TodoView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const folderId = location.state.folderId;
  const folderName = location.state.folderName;
  const [todos, setTodos] = useState([]);

  const getTodosData = async () => {
    const todosData = await getTodos(folderId);
    setTodos(todosData.data);
  };

  useEffect(() => {
    getTodosData();
  }, []);

  const createNewTodo = async (text) => {
    if (text !== "") {
      await addTodo({ text: text, folderId: folderId });
      getTodosData();
    }
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    toast("Task deleted");
    getTodosData();
  };

  return (
    <todoContext.Provider value={{ deleteTodo: removeTodo }}>
      <div className="App">
        <h1>
          <span
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer" }}
          >
            Folders
          </span>{" "}
          &gt; {folderName}
        </h1>
        <TodoList todos={todos} />
        <CreateTodo addTodo={createNewTodo} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </div>
    </todoContext.Provider>
  );
};
