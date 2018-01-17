import React from "react";
import "./clean.css";
import About from "./about";
import Professional from "./professional";

const Clean = ({ data }) => {
  return (
    <div className="clean">
      <About data={data} />
      <Professional data={data} />
    </div>
  );
};

export default Clean;
