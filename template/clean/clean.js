import React from "react";
import Image from "../image";
import "./clean.css";

const Clean = ({ data }) => {
  return (
    <div className="clean">
      <aside>
        <section className="about">
          <Flag />
          <div className="content">
            <h1 className="name">
              {data.personal.name.first}
              <br />
              {data.personal.name.last}
            </h1>
            <Image circle src={data.picture} width="120" className="picture"/>
            <h3 className="title">{data.title}</h3>
            <p className="biography">{data.biography}</p>
          </div>
        </section>
        <section className="contact" />
      </aside>
      <main />
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
      className="flag"
    >
      <polygon points="0,0 100,0 100,90 50,100 0,90" />
    </svg>
  );
};

export default Clean;
