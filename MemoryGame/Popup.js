import React, { useState } from 'react';
import './Popup.css';

export default function Popup({ question, options, correctOption, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [s, sets] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    

    console.log('Option selected:', option);
    setShowAnswer(true);
    sets(true)
  };

  const handlePopupClose = () => {
    console.log('Popup closed');
    setSelectedOption(null);
    setShowAnswer(false);
    
  };
  

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{question}</h2>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={selectedOption === option ? "selected" : "orange"}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <p className={`answer_${selectedOption === correctOption ? "correct" : "wrong"}`}>
            {selectedOption === correctOption ? "Correct!" : `Wrong! The correct answer is:  ${correctOption}`}
          </p>
        )}
       <button onClick={() => onClose(selectedOption === correctOption)} className="close-button">
          Close
      </button>

        
      </div>
    </div>
  );
}
