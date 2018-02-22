import React from "react";
import "./clean.css";
import About from "./about";
import Professional from "./professional";

const Clean = ({ data }) => {
  return (
    <div className="clean">
      <About data={data} />
      <Professional data={data} />
      <TopSlice />
      <BottomSlice />
      <Footer />
    </div>
  );
};

const TopSlice = () => {
  return (
    <svg
      width="100px"
      height="40px"
      viewBox="0 0 100 40"
      className="clean--top-slice"
    >
      <polygon points="0,0 100,0 100,40" />
    </svg>
  );
};

const BottomSlice = () => {
  return (
    <svg
      width="100px"
      height="40px"
      viewBox="0 0 100 40"
      className="clean--bottom-slice"
    >
      <polygon points="0,40 100,0 100,40" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="clean--footer">
      <a href={GITHUB_LINK} className="clean--footer--github-link">
        {`<>`} with React and <span className="clean--footer--heart">❤</span> by
        Bruno C. Couto
      </a>
    </footer>
  );
};

export default Clean;
