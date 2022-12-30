import React from "react";
import Logo from "../assets/img/Logo.png";
import MenuItem from "./MenuItem";
import { MdHome } from "react-icons/md";
import { menuItems } from "../utils/support";

const LeftContainer = () => {
  return (
    <div className="col-span-2 flex flex-col items-center py-4 px-4">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} className="w-12" alt="" />
        <p className="text-2xl text-textdarkcolor font-semibold">
          <span className="text-red-500">Snaze</span>Sound
        </p>
      </div>
      <div className="mt-3 w-full flex flex-col items-center justify-center gap-2">
        {menuItems &&
          menuItems.map((item) => (
            <MenuItem
              key={item.id}
              icon={item.icon}
              name={item.name}
              uri={item.uri}
            />
          ))}
      </div>
    </div>
  );
};

export default LeftContainer;
