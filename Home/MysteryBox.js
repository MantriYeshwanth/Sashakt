import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MysteryBox.css';

const MysteryBox = () => {
  const options = ['Game', 'Learning']; 
  const [revealedOption, setRevealedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const revealOption = () => {
    if (!isClicked) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setRevealedOption(options[randomIndex]);
      setIsClicked(true);
    }
  };
  

  const isGameReady = revealedOption === 'Game';
  const isLearningReady = revealedOption === 'Learning';

  return (
    <div className={`mystery-box ${isClicked ? 'clicked' : ''}`} onClick={revealOption}>
      <div className="box">
        {revealedOption ? (
          <p className="revealed-option">{revealedOption}</p>
        ) : (
          <p className="question-mark">?</p>
        )}
      </div>
      {isClicked && isGameReady && (
        <div className="button-container122">
          <Link to="/games" className="ready-button">
            I am ready for the Game
          </Link>

        </div>
      )}
      {isClicked && isLearningReady && (
        <div className="button-container">
          <Link to="/story" className="ready-button">
            I am ready for Learning
          </Link>
        </div>
      )}
      
    </div>
  );
};

export default MysteryBox;