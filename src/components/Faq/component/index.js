import React from "react";
import Accordion from "./Accordion";
import "../scss/main.scss"
import illustration__box from "../images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "How can I help you?",
    answer:
      "for help you need to mail us",
  },
  {
    question: "What is a product key?",
    answer:
      "product key is unique id of any product",
  },
  {
    question: "What happens after download?",
    answer:  `Content is visible in download folder.`,
  },
  {
    question: "How many members in cricket team?",
    answer: `There are eleven members in team  .`,
  },
  {
    question: "How to install application?",
    answer: `Search the application name in play store.`,
  },
];

const Index = () => {
  return (
    <div className="container">
      <div className="component">
        <div className="illustration">
          <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
          />

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  );
};

export default Index;
