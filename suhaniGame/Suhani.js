import React, { useState, useEffect } from 'react';
import './Suhani.css'

const wordsWithHints = [
  { word: 'react', hint: 'A popular JavaScript library for building user interfaces.' },
  { word: 'javascript', hint: 'A versatile programming language commonly used for web development.' },
  { word: 'programming', hint: 'The process of creating software applications.' },
  { word: 'developer', hint: 'A person who writes code to create software and applications.' },
  { word: 'learning', hint: 'The acquisition of knowledge or skills through study, experience, or teaching.' }
];

const WordScramble = () => {
  const [wordObj, setWordObj] = useState({});
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    return wordsWithHints[randomIndex];
  };

  const scrambleWord = (word) => {
    const scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    setScrambledWord(scrambled);
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === wordObj.word.toLowerCase()) {
      setMessage('Correct! Well done!');
      setScore(score + 1);
    } else {
      setMessage('Incorrect. Try again!');
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer();
  };

  const handleNextWord = () => {
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
    setMessage('');
    setUserInput('');
  };
  useEffect(() => {
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
  }, []); 


  return (
    <div className="word-scramble">
      <h2 >Unscramble the Word</h2>
      <p>Hint: {wordObj.hint}</p>
      <p>Scrambled Word: {scrambledWord}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Guess:
          <input type="text" value={userInput} onChange={handleInputChange} />
        </label>
        <button type="submit">Check</button>
      </form>
      <p className="message">{message}</p>
      {message && (
        <div>
          <p>Score: {score}</p>
          <button onClick={handleNextWord}>Next Word</button>
        </div>
      )}
    </div>
  );
};
export default WordScramble;
