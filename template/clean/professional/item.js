import React from "react";
import classnames from "classnames";
import "./item.css";
import Circle from "../../circle";

const Item = ({ children, className, ...rest }) => {
  return (
    <div className={classnames("clean--professional--item", className)}>
      <div className="clean--professional--item--circle">
        <Circle className="clean--professional--item--circle--image" />
      </div>
      <div className="clean--professional--item--content">
        {children}
      </div>
    </div>
  );
};

export default Item;
