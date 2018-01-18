import React from "react";
import "./professional.css";
import Section from "./section";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";

const Professional = ({ data }) => {
  return (
    <div className="clean--professional">
      <Experience data={data} />
      <Skills data={data} />
      <Education data={data} />
    </div>
  );
};

export default Professional;
