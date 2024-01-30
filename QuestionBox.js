// QuestionBox.js

import React, { useState, useEffect } from 'react';

const QuestionBox = ({ onAnswer }) => {
  const [questionData, setQuestionData] = useState({
    question: '',
    options: [],
  });

  useEffect(() => {
    // Fetch or generate a list of questions with options
    const questionsWithOptions = [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London'],
        correctOption: 'Paris',
      },
      {
        question: 'Who is the president of the United States?',
        options: ['Donald Trump', 'Joe Biden', 'Barack Obama'],
        correctOption: 'Joe Biden',
      },
      {
        question: 'What is the largest mammal on Earth?',
        options: ['Elephant', 'Blue Whale', 'Giraffe'],
        correctOption: 'Blue Whale',
      },
      // Add more questions with options as needed
    ];

    // Select a random question
    const randomQuestionData =
      questionsWithOptions[Math.floor(Math.random() * questionsWithOptions.length)];

    setQuestionData(randomQuestionData);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleAnswer = (selectedOption) => {
    // Handle the answer logic here
    // Compare the selected option with the correct option
    const isCorrect = selectedOption === questionData.correctOption;
    
    // Pass the result to the parent component if needed
    onAnswer(isCorrect);
  };

  return (
    <div className="question-box">
      <p>{questionData.question}</p>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBox;
