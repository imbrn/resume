import React from "react";
import classnames from "classnames";
import "./image.css";

const Image = ({ className, circle = false, ...rest }) => {
  const modifiersClasses = classnames(circle && "image__circle");
  return <img {...rest} className={classnames("image", modifiersClasses, className)} />
};

export default Image;