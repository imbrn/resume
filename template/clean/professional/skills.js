import React from "react";
import classnames from "classnames";
import Section from "./section";
import Item from "./item";
import "./skills.css";
import SlidersSvg from "../icons/sliders.svg";
import Circle from "../../circle";

const Skills = ({ data }) => {
  return (
    <Section
      title="Skills"
      icon={SlidersSvg}
      className="clean--professional--skills"
    >
      <div className="clean--professional--skills--content">
        <Item className="clean--professional--skills--development">
          <h1 className="clean--professional--skills--development--title">
            Development
          </h1>
          <SkillsTable
            skills={data.skills.development}
            className="clean--professional--skills--development--table"
          />
        </Item>
        <Item className="clean--professional--skills--engineering">
          <h1 className="clean--professional--skills--engineering--title">
            Engineering
          </h1>
          <SkillsTable
            skills={data.skills.engineering}
            className="clean--professional--skills--engineering--table"
          />
        </Item>
      </div>
    </Section>
  );
};

const SkillsTable = ({ skills }) => {
  return (
    <table className="clean--professional--skills--table">
      <tbody>
        {skills.map((skill, index) => (
          <tr className="clean--professional--skills--table--row" key={index}>
            <td className="clean--professional--skills--table--col">
              {skill.name}
            </td>
            <td className="clean--professional--skills--table--col">
              <SkillBar skill={skill} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SkillBar = ({ skill }) => {
  const count = Math.floor(skill.level / 2);
  const circles = [];
  console.log(skill, count);
  for (let i = 0; i < 5; i++) {
    const modifierClasses = classnames(
      i < count && "clean--professional--skills--bar--circle__filled"
    );
    const circle = (
      <Circle
        key={i}
        className={classnames(
          "clean--professional--skills--bar--circle",
          modifierClasses
        )}
      />
    );
    circles.push(circle);
  }
  return <div className="clean--professional--skills--bar">{circles}</div>;
};

export default Skills;
