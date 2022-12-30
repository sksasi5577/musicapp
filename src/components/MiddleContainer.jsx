import React from "react";
import { Banner, SearchComponent } from "../components";

const MiddleContainer = () => {
  return (
    <div className="col-span-8">
      {/* search box section */}
      <SearchComponent />
      <Banner />
    </div>
  );
};

export default MiddleContainer;
