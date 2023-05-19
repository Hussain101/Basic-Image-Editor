import React from "react";

const Sidebaritem = ({ name, active, handleclick }) => {
  return (
    <div>
      <button
        className={`sidebar-item ${active ? "active" : ""}`}
        onClick={handleclick}
      >
        {name}
      </button>
    </div>
  );
};

export default Sidebaritem;
