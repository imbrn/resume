import React from "react";
import classnames from "classnames";
import "./a4.css";

const A4 = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={classnames("a4", className)}>
      {children}
    </div>
  );
};

export default A4;