import React from "react";
import "./professional.css";
import Section from "./section";
import Experience from "./experience";

const Professional = ({ data }) => {
  return (
    <div className="clean--professional">
      <Experience data={data} />
    </div>
  );
};

export default Professional;
