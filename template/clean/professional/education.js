import React from "react";
import Section from "./section";
import Item from "./item";
import "./education.css";
import BookSvg from "../icons/book.svg";

const Education = ({ data }) => {
  return (
    <Section
      title="Education"
      icon={BookSvg}
      className="clean--professional--education"
    >
      <div className="clean--professional--education--content">
        {data.education.map((item, index) => {
          return <EducationItem item={item} />;
        })}
      </div>
    </Section>
  );
};

const EducationItem = ({ item }) => {
  return (
    <Item className="clean--professional--education--item">
      <h1>{item.title}</h1>
      <h2>{item.institution}</h2>
      <h3>{item.period}</h3>
      <p>{item.description}</p>
    </Item>
  );
};

export default Education;
