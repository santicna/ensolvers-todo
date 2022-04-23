import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import todoContext from "../../Components/Todos/TodoContext";
import { CreateTodo } from "../../Components/Todos/CreateTodo";
import { TodoList } from "../../Components/Todos/TodoList";
import { useLocation } from "react-router-dom";

export const TodoView = () => {
  const location = useLocation();
  const folder = location.state.folder;
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(`todos-${folder}`);

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(`todos-${folder}`, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: uuid(),
          text: todo.trim(),
        },
      ]);
    }
  }

  function deleteTodo(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  return (
    <todoContext.Provider value={{ deleteTodo: deleteTodo }}>
      <div className="App">
        <h1>Folders &gt; {folder}</h1>
        <TodoList todos={todos} />
        <CreateTodo addTodo={addTodo} />
      </div>
    </todoContext.Provider>
  );
};
