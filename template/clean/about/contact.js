import React from "react";
import "./contact.css";
import Title from "../title";
import Icon from "../icon";
import MapPinSvg from "../icons/map-pin.svg";
import GithubSvg from "../icons/github.svg";
import EmailSvg from "../icons/mail.svg";
import LinkedInSvg from "../icons/linkedin.svg";
import strings from "../strings";

const Contact = ({ data }) => {
  return (
    <div className="clean--about--contact">
      <Title>{strings["contact"]}</Title>
      <div className="clean--about--contact--items">
        <ContactItem icon={MapPinSvg}>
          <h1>
            {data.address.city}
          </h1>
          <h3>
            {data.address.state}, {data.address.country}
          </h3>
        </ContactItem>
        <ContactItem icon={EmailSvg}>
          <h2>
            {data.contact.email}
          </h2>
        </ContactItem>
        <ContactItem icon={GithubSvg}>
          <h2>
            {data.contact.github}
          </h2>
        </ContactItem>
        <ContactItem icon={LinkedInSvg}>
          <h2>
            {data.contact.linkedin}
          </h2>
        </ContactItem>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, children, ...rest }) => {
  return (
    <div {...rest} className="clean--about--contact--item">
      <Icon svg={icon} />
      <div className="clean--about--contact--item--data">{children}</div>
    </div>
  );
};

export default Contact;
