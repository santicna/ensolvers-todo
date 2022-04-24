import React, { useContext } from "react";
import folderContext from "./FolderContext";
import { Link } from "react-router-dom";

export const Folder = ({ id, name }) => {
  const context = useContext(folderContext);
  return (
    <div className="item-container">
      <div className="item-text">
        <span>{name}</span>
      </div>
      <div className="item-buttons">
        <Link to={"/Todos"} state={{ folderId: id, folderName: name }}>
          <button>View Items</button>
        </Link>
        <button onClick={() => context.deleteAction(id)}>Remove</button>
      </div>
    </div>
  );
};
