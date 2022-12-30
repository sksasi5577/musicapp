import React from "react";
import LoaderSVG from "../assets/Loadericon.svg";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <img src={LoaderSVG} alt="" />
    </div>
  );
};

export default Loader;
