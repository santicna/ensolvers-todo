import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoView from "./Views/TodoView";
import TodoEditView from "./Views/TodoView/TodoEditView";
import FolderView from "./Views/FolderView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FolderView />} />
        <Route path="Todos" element={<TodoView />} />
        <Route path="TodoEdit" element={<TodoEditView />} />
      </Routes>
    </>
  );
}

export default App;
