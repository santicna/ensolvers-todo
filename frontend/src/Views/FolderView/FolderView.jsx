import React, { useEffect, useState } from "react";
import { FolderList } from "../../Components/Folders/FolderList";
import { CreateFolder } from "../../Components/Folders/CreateFolder";
import { v4 as uuid } from "uuid";
import folderContext from "../../Components/Folders/FolderContext";

export const FolderView = () => {
  const [folders, setFolders] = useState(() => {
    const savedFolders = localStorage.getItem("folders");

    if (savedFolders) {
      return JSON.parse(savedFolders);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  function addFolder(name) {
    if (name !== "") {
      setFolders([
        ...folders,
        {
          id: uuid(),
          name: name.trim(),
        },
      ]);
    }
  }

  function removeFolder(name, id) {
    const removeItem = folders.filter((folder) => {
      return folder.id !== id;
    });
    setFolders(removeItem);
  }

  return (
    <folderContext.Provider value={{ deleteAction: removeFolder }}>
      <div className="App">
        <h1>Folders</h1>
        <FolderList folders={folders} />
        <CreateFolder addFolder={addFolder} />
      </div>
    </folderContext.Provider>
  );
};
