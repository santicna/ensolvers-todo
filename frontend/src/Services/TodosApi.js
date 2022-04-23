import axios from "axios";
import GetRequestHeaders from "./Helpers/GetRequestHeaders";

const todosEndpoint = "http://localhost:3000/api/todos";

export const addTodo = (todo) => {
  return axios.post(todosEndpoint, todo, GetRequestHeaders());
};

export const getTodos = (folderId) => {
  const endpoint = todosEndpoint + `/folder/${folderId}`;
  return axios.get(endpoint, GetRequestHeaders());
};

export const editTodo = (id, text) => {
  const endpoint = todosEndpoint + `/${id}`;
  return axios.put(endpoint, text, GetRequestHeaders());
};

export const deleteTodo = (id) => {
  const endpoint = todosEndpoint + `/${id}`;
  return axios.delete(endpoint, GetRequestHeaders());
};
