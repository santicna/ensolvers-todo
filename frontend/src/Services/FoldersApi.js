import axios from "axios";
import GetRequestHeaders from "./Helpers/GetRequestHeaders";

const foldersEndpoint = "http://localhost:3000/api/folders";

export const addFolder = (folder) => {
  return axios.post(foldersEndpoint, folder, GetRequestHeaders());
};

export const getFolders = () => {
  return axios.get(foldersEndpoint, GetRequestHeaders());
};

export const deleteFolder = (id) => {
  const endpoint = foldersEndpoint + `/${id}`;
  return axios.delete(endpoint, GetRequestHeaders());
};
