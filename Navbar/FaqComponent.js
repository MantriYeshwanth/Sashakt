// FaqComponent.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FaqComponent.css'; 

const FaqComponent = () => {
  const [showText, setShowText] = useState(null);

  const toggleAnswer = (index) => {
    setShowText((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'How can my child benefit from using Sashakt?',
      answer: "Using Sashakt, your child can benefit by engaging in educational games and interactive stories that promote learning about child rights. ",
    },
    {
      question: 'Are the games and stories age-appropriate for children?',
      answer: "All games and stories on Sashakt are carefully designed to be age-appropriate.",
    },
    {
      question: 'What age range is Sashakt designed for?',
      answer: "Sashakt is designed to cater to a diverse age range, offering content suitable for children across various developmental stages. .",
    },
    {
      question: 'How can I contact support if I encounter issues?',
      answer: "For any support or assistance, you can reach out to our dedicated support team through the contact details provided on the Sashakt platform..", 
    },
    {
      question: "Can I track my child's progress and achievements?",
      answer: "Yes, Sashakt offers a feature that allows parents to track their child's progress and achievements",
    },
    // Add more FAQ items as needed
  ];
  
  const containerStyle = {
    backgroundImage: `url('/Images/FAQ1.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '50px',
    marginBottom: '30px',
    borderRadius: '10px',
    filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))',
  };

  return (
    <div className="container">
      <div className="container" style={containerStyle}>
        <h1 className="title130">Frequently Asked Questions</h1>
        <main className="accordion">
          <div className="content-accordion">
            {faqData.map((faq, index) => (
              <div className={`question-answer120 ${index === showText ? 'show-text' : ''}`} key={index}>
                <div className="question">
                  <h3 className="title-question">{faq.question}</h3>
                  <button className="question-btn" onClick={() => toggleAnswer(index)}>
                    <span className={`up-icon ${index === showText ? 'rotate' : ''}`}>
                      <FontAwesomeIcon icon={faChevronUp} />
                    </span>
                    <span className={`down-icon ${index !== showText ? 'rotate' : ''}`}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>
                </div>
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
      </div>
    </div>
  );
};

export default FaqComponent;
