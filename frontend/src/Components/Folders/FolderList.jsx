import React from "react";
import { Folder } from "./Folder";

export const FolderList = ({ folders }) => {
  return (
    <>
      <ul className="folders-list">
        {folders.map((folder) => (
          <li key={folder.id}>
            <Folder id={folder.id} name={folder.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
