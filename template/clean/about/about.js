import React from "react";
import classnames from "classnames";
import "./about.css";
import Personal from "./personal";

const About = ({ className, data, ...rest }) => {
  return (
    <div className={classnames("clean--about", className)}>
      <Personal data={data} />
    </div>
  );
};

export default About;
