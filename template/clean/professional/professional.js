import React from "react";
import "./professional.css";
import Section from "./section";
import Experience from "./experience";
import Skills from "./skills";

const Professional = ({ data }) => {
  return (
    <div className="clean--professional">
      <Experience data={data} />
      <Skills data={data} />
    </div>
  );
};

export default Professional;
