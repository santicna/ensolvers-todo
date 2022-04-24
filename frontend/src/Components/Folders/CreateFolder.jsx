import React, { useState } from "react";

export const CreateFolder = ({ addFolder }) => {
  const [name, setName] = useState("");
  function handleInputChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="create-container">
      <input
        name="name"
        type="text"
        placeholder="New Folder"
        value={name}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          addFolder({ name: name });
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
};
