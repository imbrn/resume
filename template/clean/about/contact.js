import React from "react";
import classnames from "classnames";
import "./contact.css";
import Title from "../title";
import Icon from "../icon";
import MapPinSvg from "../icons/map-pin.svg";
import GithubSvg from "../icons/github.svg";
import EmailSvg from "../icons/mail.svg";
import TwitterSvg from "../icons/twitter.svg";
import strings from "../strings";

const Contact = ({ data }) => {
  return (
    <div className="clean--about--contact">
      <Title>{strings["contact"]}</Title>
      <div className="clean--about--contact--items">
        {data.contact.slice(0, 4).map((contact, i) => {
          const Item = ContactItemFactory(contact);
          return (
            <Item
              key={i}
              contact={contact}
              className="clean--about--items--item"
            />
          );
        })}
      </div>
    </div>
  );
};

function ContactItemFactory(contact) {
  switch (contact.type) {
    case "address":
      return AddressContactItem;
    case "email":
      return EmailContactItem;
    case "twitter":
      return TwitterContactItem;
    case "github":
      return GithubContactItem;
    default:
      return DefaultContactItem;
  }
}

const ContactItem = ({ icon, link, children, className }) => {
  const Wrapper = link
    ? ({ children, ...rest }) => (
        <a {...rest} href={link}>
          {children}
        </a>
      )
    : "span";
  return (
    <div className={classnames(className, "clean--about--contact--item")}>
      <Wrapper className="clean--about--contact--item--wrapper">
        {icon ? <Icon svg={icon} /> : null}
        <div className="clean--about--contact--item--data">{children}</div>
      </Wrapper>
    </div>
  );
};

const DefaultContactItem = ({ contact, className }) => {
  return <ContactItem>{contact.value}</ContactItem>;
};

const AddressContactItem = ({ contact, className }) => {
  return (
    <ContactItem
      icon={MapPinSvg}
      className={classnames(className, "clean--about--contact--item__address")}
    >
      <h1>{contact.value.city}</h1>
      <h2>
        {contact.value.state}, {contact.value.country}
      </h2>
    </ContactItem>
  );
};

const EmailContactItem = ({ contact, className }) => {
  return (
    <ContactItem icon={EmailSvg} link={`mailto:${contact.value}`}>
      {contact.value}
    </ContactItem>
  );
};

const TwitterContactItem = ({ contact, className }) => {
  return (
    <ContactItem
      icon={TwitterSvg}
      link={`https://twitter.com/${contact.value}`}
    >
      {contact.value}
    </ContactItem>
  );
};

const GithubContactItem = ({ contact, className }) => {
  return (
    <ContactItem
      icon={GithubSvg}
      link={`https://github.com/${contact.value}`}
    >{contact.value}</ContactItem>
  );
};

export default Contact;
