import React from "react";
import { Folder } from "./Folder";

export const FolderList = ({ folders }) => {
  return (
    <>
      <ul className="item-list">
        {folders.map((folder) => (
          <li className="folder-item" key={folder.id}>
            <Folder id={folder.id} name={folder.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
