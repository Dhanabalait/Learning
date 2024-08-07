import React from "react";
import "./Accordion.css";
import FaqItem from "./FaqItem";
import { Link } from "react-router-dom";

export default function FAQAccordion({ accordionData }) {
  return (
    <div className="accordion p-4">
      <h2>FAQ Accordion</h2>
      {accordionData.map((item) => {
        console.log(item);
        return (<FaqItem key={item.id} question={item.question} answer={item.answer} />)
      })}
      <div className="mt-3">
      <Link to="/" className="text-primary">Home</Link></div>
    </div>
  );
}
