import React, { useEffect, useState } from "react";
import { FolderList } from "../../Components/Folders/FolderList";
import { CreateFolder } from "../../Components/Folders/CreateFolder";
import { v4 as uuid } from "uuid";
import folderContext from "../../Components/Folders/FolderContext";
import toast, { Toaster } from "react-hot-toast";

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
    if (folderExists(name)) {
      toast("Folder already exists");
    } else if (name !== "") {
      setFolders([
        ...folders,
        {
          id: uuid(),
          name: name.trim(),
        },
      ]);
    }
  }

  function folderExists(folderName) {
    var exists = false;
    folders.forEach((folder) => {
      if (folder.name == folderName) {
        console.log("AAAAAAAAAA");
        exists = true;
      }
    });
    return exists;
  }

  function removeFolder(name, id) {
    localStorage.removeItem(`todos-${name}`);
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
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </div>
    </folderContext.Provider>
  );
};
