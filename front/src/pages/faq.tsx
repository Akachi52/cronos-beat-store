import React from 'react'
import { useState } from 'react';
import './pages.css'

export default function FAQ() {
   const faqData = [
     {question: "Are beats tagged after i purchase them?",answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",},
     { question: "What are your licensing terms?", answer: "All beats come with standard licensing and options for exclusive rights." },
     { question: "How do I receive purchased beats?", answer: "Beats will be emailed instantly after purchase with download links." },
     { question: "Do you offer custom beats?", answer: "Yes! Contact us using the form below with your request." }
   ];
 
   const [openFAQ, setOpenFAQ] = useState(null);
   const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);
 
   const FAQItem = ({ question, answer, index, isOpen, toggle }) => (
     <div className="accordion-item">
       <h2 className="accordion-header" id={`heading${index}`}>
         <button
           className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
           type="button"
           onClick={() => toggle(index)}
         >
           {question}
         </button>
       </h2>
       <div
         id={`collapse${index}`}
         className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
       >
         <div className="accordion-body">{answer}</div>
       </div>
     </div>
   );
 
   return (
     <div className="container mb-5 mt-4" style={{minHeight:'75vh'}}>
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
