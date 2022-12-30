import React from "react";

const MenuItem = ({ icon, name, uri }) => {
  return (
    <div className="w-full flex items-center gap-4">
      {icon} <p>{name}</p>
    </div>
  );
};

export default MenuItem;
