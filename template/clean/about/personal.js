import React from "react";
import "./personal.css";
import Image from "../../image";
import Circle from "../../circle";

const Personal = ({ data }) => {
  return (
    <div className="clean--about--personal">
      <Flag />
      <div className="clean--about--personal--content">
        <Name name={data.personal.name} />
        <Image
          circle
          src={data.picture}
          className="clean--about--personal--picture"
        />
        <Title title={data.title} />
        <div className="clean--about--personal--separator">
          <Circle className="circle" />
          <Circle className="circle" />
          <Circle className="circle" />
        </div>
        <Biography biography={data.biography} />
      </div>
    </div>
  );
};

const Flag = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="clean--about--personal--flag"
    >
      <polygon points="0,0 100,0 100,90 50,100 0,90" />
    </svg>
  );
};

const Name = ({ name }) => {
  return (
    <h1 className="clean--about--personal--name">
      {name.first} {name.last}
    </h1>
  );
};

const Title = ({ title }) => (
  <h2 className="clean--about--personal--title">
    {title}
  </h2>
);

const Biography = ({ biography }) => (
  <p className="clean--about--personal--biography">
    {biography}
  </p>
);

export default Personal;
