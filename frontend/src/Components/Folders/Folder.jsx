import React, { useContext } from "react";
import folderContext from "./FolderContext";

export const Folder = ({ id, name }) => {
  const context = useContext(folderContext);
  return (
    <>
      <span>{name}</span>
      <button>View Items</button>
      <button onClick={() => context.deleteAction(name, id)}>Remove</button>
    </>
  );
};
