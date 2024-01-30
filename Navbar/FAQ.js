// FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: '1.Sample FAQ 1?',
      answer: 'Sample Answer 1.',
      isOpen: false,
    },
    {
      question: '2.Sample FAQ 2?',
      answer: 'Sample Answer 2.',
      isOpen: false,
    },
    {
      question: '3.Sample FAQ 3?',
      answer: 'Sample Answer 3.',
      isOpen: false,
    },
    {
      question: '4.Sample FAQ 4?',
      answer: 'Sample Answer 4.',
      isOpen: false,
    },
    {
      question: '5.Sample FAQ 5?',
      answer: 'Sample Answer 5.',
      isOpen: false,
    },
    // Add more questions and answers as needed
  ]);

  const handleToggleAnswer = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq">
      <h1>FAQ's-Frequently Asked Questions</h1>
      <h3>--------------------------------------------------------------------</h3>
      <h2>Click on the question to see answer</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggleAnswer(index)}>
            {faq.question}
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
