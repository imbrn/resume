import React from "react";
import { render } from "react-dom";
import { templateFactory } from "./template";
import data from "./data";

const Template = templateFactory();

render(
  <Template data={data} />,
  document.getElementById("app")
);