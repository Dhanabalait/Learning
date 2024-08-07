import React, { useState } from "react";

export default function FaqItem({ id, question, answer }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div key={id} className={`accordion-item ${show ? "active" : ""}`}>
      <div className="accordion-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="accordion-body">
        <p className="accordion-body-content mb-0">{answer}</p>
      </div>
    </div>
  );
}
