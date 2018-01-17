import React from "react";
import classnames from "classnames";
import "./circle.css";

const Circle = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={classnames("circle", className)}>
      {children}
    </div>
  );
};

export default Circle;
