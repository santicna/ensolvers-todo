import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoView from "./Views/TodoView";
import TodoEditView from "./Views/TodoView/TodoEditView";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoView />} />
        <Route path="TodoEdit" element={<TodoEditView />} />
      </Routes>
    </>
  );
}

export default App;
