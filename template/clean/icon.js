import React from "react";
import classnames from "classnames";
import Circle from "../circle";
import "./icon.css";

const Icon = ({ svg, className, background = "dark", size=36, ...rest }) => {
  const Icon = svg;
  const modifiersClasses = classnames(`background-${background}`);
  return (
    <Circle
      {...rest}
      className={classnames("icon", className, modifiersClasses)}
      style={{ width: size, height: size }}
    >
      <Icon className="icon--image" />
    </Circle>
  );
};

export default Icon;
