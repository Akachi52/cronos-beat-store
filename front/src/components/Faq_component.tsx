import React, { useState } from 'react';

export default function Faq_component() {
  const faqData = [
     {
      question: "Are beats tagged after i purchase them?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    },
    {
      question: "What are your licensing terms?",
      answer: "All beats come with standard licensing and options for exclusive rights.",
    },
    {
      question: "How do I receive purchased beats?",
      answer: "Beats will be emailed instantly after purchase with download links.",
    },
    {
      question: "Do you offer custom beats?",
      answer: "Yes! Contact us using the form below with your request.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const FAQItem = ({ question, answer, index, isOpen, toggle }) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className={`accordion-button d-flex justify-content-between align-items-center ${!isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          aria-controls={`collapse${index}`}
        >
          <span>{question}</span>
          <span
            className={`ms-2 transition ${isOpen ? 'rotate-icon' : ''}`}
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              fontSize: '1rem',
            }}
          >
  
          </span>
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby={`heading${index}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );

  return (
    <div className="container mb-5">
      <h3 className="fw-bold mb-4 text-center">FAQ</h3>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, idx) => (
          <FAQItem
            key={idx}
            index={idx}
            isOpen={openFAQ === idx}
            toggle={toggleFAQ}
            {...faq}
          />
        ))}
      </div>
    </div>
  );
}
