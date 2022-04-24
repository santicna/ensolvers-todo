import React, { useEffect, useState } from "react";
import { FolderList } from "../../Components/Folders/FolderList";
import { CreateFolder } from "../../Components/Folders/CreateFolder";
import folderContext from "../../Components/Folders/FolderContext";
import toast, { Toaster } from "react-hot-toast";
import { getFolders, addFolder, deleteFolder } from "../../Services/FoldersApi";

export const FolderView = () => {
  const [folders, setFolders] = useState([]);

  const getFoldersData = async () => {
    const foldersData = await getFolders();
    setFolders(foldersData.data);
  };

  useEffect(() => {
    getFoldersData();
  }, []);

  const createNewFolder = async (name) => {
    if (name !== "") {
      await addFolder(name);
      getFoldersData();
    }
  };

  const removeFolder = async (id) => {
    await deleteFolder(id);
    toast("Folder deleted");
    getFoldersData();
  };

  return (
    <folderContext.Provider value={{ deleteAction: removeFolder }}>
      <div className="App">
        <div>
          <h1>Folders</h1>
          <FolderList folders={folders} />
          <CreateFolder addFolder={createNewFolder} />
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
      </div>
    </folderContext.Provider>
  );
};
