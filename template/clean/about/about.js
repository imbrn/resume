import React from "react";
import classnames from "classnames";
import "./about.css";
import Personal from "./personal";
import Contact from "./contact";

const About = ({ className, data, ...rest }) => {
  return (
    <div className={classnames("clean--about", className)}>
      <Personal data={data} />
      <Contact data={data} />
    </div>
  );
};

export default About;
