import React from "react";
import { MdVerified } from "react-icons/md";
import Taylor from "../assets/img/Taylor.png";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "url(https://visitbgohio.org/wp-content/uploads/2019/08/BG-TO-DO-628x540.jpg) center no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-72 bg-gray-400 rounded-3xl shadow-md relative"
    >
      <div className="absolute inset-0 bg-bgOverlay flex items-end justify-between px-12 rounded-3xl">
        <div className="flex flex-col items-start gap-2 h-full justify-center">
          <div className="flex items-center justify-center gap-1">
            <MdVerified className="text-blue-700" />
            <p className="text-base text-gray-200">Verified</p>
          </div>
          <h1 className="capitalize font-bold text-[36px] text-primary">
            Taylor Swift
          </h1>
          <p className="text-sm text-gray-200">
            <span className="text-base font-bold">45,232,232</span> monthly
            followers
          </p>
        </div>
        <img src={Taylor} className="w-56 object-contain" alt="" />
      </div>
    </div>
  );
};

export default Banner;
