// src/MCQQuiz.js
import React, { useState } from 'react';
import Right from '@/assets/Right.wav'
import Wrong from '@/assets/Wrong.wav'

const MCQQuiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  // const [isCorrect, setIsCorrect] = useState(null);
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      answer: "4",
    },
    {
      question: "What is 5 - 3?",
      options: ["1", "2", "3"],
      answer: "2",
    },
  ];

  const handleSubmit = () => {
    if (selectedOption === questions[score].answer) {
      setScore(score + 1);
      new Audio(Right).play();
    } else {
      new Audio(Wrong).play();
    }
    setSelectedOption('');
  };

  return (
    <div className="quiz-container p-4 pt-10 bg-light w-screen h-screen">


      <div className='flex flex-col items-center h-full'>


        <h1 className="text-4xl font-bold mb-20 p-5 shadow-md">MCQ Quiz</h1>
        
        <h3 className='mb-8 text-xl font-light '> Total Number of Questions: {questions.length } </h3>


        {score < questions.length ? (
          <div>




            <h2 className="text-2xl mb-8">{questions[score].question}</h2>
            {questions[score].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                {option}
              </div>
            ))}
            <button onClick={handleSubmit} className="bg-gree text-whit p-4 rounded hover:bg-gree/50 mt-10">
              Submit
            </button>

          </div>
          
          
      
      ) : (
      <h2 className="text-4xl text-center mt-4">Quiz Completed! You scored {score} out of {questions.length}.</h2>
        )}
    </div>


    </div >




  );
};

export default MCQQuiz;