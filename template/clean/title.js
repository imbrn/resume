import React from "react";
import classnames from "classnames";
import "./title.css";

const Title = ({ children, className, ...rest }) => {
  return (
    <h1 {...rest} className={classnames("title", className)}>{children}</h1>
  )
};

export default Title;