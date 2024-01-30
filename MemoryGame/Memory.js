import React, { useEffect, useState } from 'react';
import './single.css';
import Single from './Single';
import Popup from './Popup';
import './Memory.css'

// const cardImages = [
//   { "src": "/child-labour1.png", matched: false, question: "What does this image represent?", options: ["Child Labor", "Education", "Play"], correctOption: "Child Labor" },
//   { "src": "/help_old1.png", matched: false, question: "What is the theme of this image?", options: ["Old Age Support", "Healthcare", "Charity"], correctOption: "Old Age Support" },
//   { "src": "/play.png", matched: false, question: "What does this image represent?", options: ["Child Labor", "Education", "Children should play"], correctOption: "Children should play" },
//   { "src": "/domes_voi.png", matched: false, question: "What does this image represent?", options: ["Child Labor", "Education", "Domestic Violence"], correctOption: "Domestic Violence" },
//   { "src": "/edu1.png", matched: false, question: "What does this image represent?", options: ["Mobile addiction", "Education", "Play"], correctOption: "Education" },
//   { "src": "/mobile_add.png", matched: false, question: "What does this image represent?", options: ["Healthcare", "Mobile addiction", "Play"], correctOption: "Mobile addiction" },
// ];
const cardImages = [
  { "src": "/edu1.png", matched: false, question: "In matters concerning the child's education, what should be considered?", options: ["Only parents’ opinions", "Child’s preferences", "Government regulations", "Teacher recommendations"], correctOption: "Child’s preferences" },
  { "src": "/Images/memoryhealth.webp", matched: false, question: "When making healthcare decisions for a child, whose views should be taken into account?", options: ["Only doctors", "Parents only", "Child and parents", "Government authorities"], correctOption: "Only doctors" },
  { "src": "/Images/memorycustody.png", matched: false, question: "In cases of divorce or separation, whose views on custody arrangements should be considered?", options: ["Only parents", "Legal authorities", "Child and Legal authorities", "Extended family"], correctOption: "Child and Legal authorities" },
  { "src": "/Images/memoryreli.jpeg", matched: false, question: "In decisions related to religious practices, whose views should be respected?", options: ["Religious leaders", "child only", "Child and parents", "Government authorities"], correctOption: "Child only" },
  { "src": "/play.png", matched: false, question: "When choosing extracurricular activities, whose preferences should be considered?", options: ["Only parents’ opinions", "Child’s preferences", "Government regulations", "Teacher recommendations"], correctOption: "Child’s preferences" },
  { "src": "/Images/memorySocial1.jpg", matched: false, question: "Whose views on social relationships and activities should be acknowledged?", options: ["Only parents’ opinions", "Child’s preferences", "Government authorities", "Peer influence"], correctOption: "Child’s preferences" },
];


function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopupClose = (isCorrect) => {
    setPopupVisible(false);
    resetTurn();
    if (isCorrect) {
      setScore((prevScore) => prevScore + 5);
    } else {
      setScore((prevScore) => Math.max(0, prevScore - 2));

    }
    setScore((prevScore) => prevScore - turns);
    
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setPopupVisible(true);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="Appmemo">
      <h1 className="titleyesh2"> Memory Game</h1>
      <div className="info-containeryesh2">
        <div className="info-itemyesh2">
          
          <p>Turns: {turns}</p>
        </div>
        <div className="info-itemyesh2">
          <p>Score: {score}</p>
        </div>
        <button className="new-game-buttonyesh2" onClick={shuffleCards}>
          NEW GAME
        </button>
      </div>

      {/* Score icon
      <div className="score-icon-container">
        <span role="img" aria-label="Score">
          🌟
        </span>
      </div> */}

      <div className="card-gridyesh2">
        {cards.map((card) => (
          <Single
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      {popupVisible && (
        <Popup
          question={choiceOne.question}
          options={choiceOne.options}
          correctOption={choiceOne.correctOption}
          onClose={(isCorrect) => handlePopupClose(isCorrect)}
        />
      )}
    </div>
  );
}

export default Memory;
