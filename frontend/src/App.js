import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoView from "./Views/TodoView";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoView />} />
      </Routes>
    </>
  );
}

export default App;
