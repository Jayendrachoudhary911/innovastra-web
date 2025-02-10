import React from "react";
import { forwardRef } from "react";

const FAQs = forwardRef((props, ref) => {
  const faqs = [
    { question: "Who can participate?", answer: "Anyone with a passion for coding!" },
    { question: "Is it free?", answer: "Yes, participation is completely free." },
    { question: "What should I bring?", answer: "Bring your laptop and enthusiasm!" },
  ];

  return (
    <section ref={ref} id="faqs">
      <h2>FAQs</h2>
      <div className="faq-item">
        {faqs.map((faq, index) => (
          <details key={index}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
});

export default FAQs;
