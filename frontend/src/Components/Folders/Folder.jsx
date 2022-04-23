import React, { useContext } from "react";
import folderContext from "./FolderContext";
import { Link } from "react-router-dom";

export const Folder = ({ id, name }) => {
  const context = useContext(folderContext);
  return (
    <>
      <span>{name}</span>
      <Link to={"/Todos"} state={{ folderId: id, folderName: name }}>
        <button>View Items</button>
      </Link>
      <button onClick={() => context.deleteAction(id)}>Remove</button>
    </>
  );
};
