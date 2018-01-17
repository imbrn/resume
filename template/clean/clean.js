import React from "react";
import "./clean.css";
import About from "./about";

const Clean = ({ data }) => {
  return (
    <div className="clean">
      <About data={data} />
    </div>
  );
};

export default Clean;
