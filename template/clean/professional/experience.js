import React from "react";
import "./experience.css";
import Section from "./section";
import Item from "./item";
import BriefcaseSvg from "../icons/briefcase.svg";
import strings from "../strings";

const Experience = ({ data }) => {
  return (
    <Section title={strings["experience"]} icon={BriefcaseSvg}>
      {data.experience
        .slice(0, 4)
        .map((item, index) => <ExperienceItem key={index} item={item} />)}
    </Section>
  );
};

const ExperienceItem = ({ item }) => {
  const Wrapper = item.link
    ? ({ children }) => <a href={item.link}>{children}</a>
    : "span";

  return (
    <div className="clean--professional--experience--item">
      <Item>
        <Wrapper>
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
        </Wrapper>
      </Item>
    </div>
  );
};

export default Experience;
