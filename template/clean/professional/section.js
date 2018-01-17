import React from "react";
import classnames from "classnames";
import Icon from "../icon";
import Title from "../title";
import "./section.css";

const Section = ({ children, icon, title, className, ...rest }) => {
  return (
    <section
      {...rest}
      className={classnames("clean--professional--section", className)}
    >
      <div className="clean--professional--section--header">
        <Icon svg={icon} background="light" />
        <Title className="clean--professional--section--header--title">
          {title}
        </Title>
      </div>
      {children}
    </section>
  );
};

export default Section;
