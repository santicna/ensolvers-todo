import React, { useContext } from "react";
import folderContext from "./FolderContext";
import { Link } from "react-router-dom";

export const Folder = ({ id, name }) => {
  const context = useContext(folderContext);
  return (
    <>
      <span>{name}</span>
      <Link to={"/Todos"} state={{ folder: name }}>
        <button>View Items</button>
      </Link>
      <button onClick={() => context.deleteAction(name, id)}>Remove</button>
    </>
  );
};
