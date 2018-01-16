import React from "react";
import { render } from "react-dom";
import { templateFactory } from "./template";
import data from "./data";
console.log(data);

const Template = templateFactory();

render(
  <Template data={data} />,
  document.getElementById("app")
);