import React from "react";
import "./professional.css";
import Section from "./section";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";

const Professional = ({ data }) => {
  return (
    <div className="clean--professional">
      <div className="clean--professional--content">
        <Experience data={data} />
        <Skills data={data} />
        <Education data={data} />
      </div>
      <footer>made with react and <span className="clean--heart">❤</span> by bruno02221</footer>
    </div>
  );
};

export default Professional;
