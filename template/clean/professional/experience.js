import React from "react";
import "./experience.css";
import Section from "./section";
import Item from "./item";
import BriefcaseSvg from "../icons/briefcase.svg";

const Experience = ({ data }) => {
  return (
    <Section title="Experience" icon={BriefcaseSvg}>
      {data.experience.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </Section>
  );
};

const ExperienceItem = ({ item }) => {
  return (
    <div className="clean--professional--experience--item">
      <Item>
        <div className="clean--professional--experience--item--title">
          <h1>{item.role}</h1>
          <hr />
          <h2>{item.period}</h2>
        </div>
        <h2 className="clean--professional--experience--item--project">
          {item.project}
        </h2>
        <p className="clean--professional--experience--item--description">
          {item.description}
        </p>
      </Item>
    </div>
  );
};

export default Experience;
