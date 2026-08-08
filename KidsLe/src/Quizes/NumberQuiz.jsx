// src/NumberQuiz.js
import React, { useState } from 'react';
import Right from '@/assets/Right.wav'
import Wrong from '@/assets/Wrong.wav'
import { FaRegHandPointRight } from "react-icons/fa";

const NumberQuiz = () => {
  const [progress, setProgress] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

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
    {
      question: "What is 5 - 3?",
      options: ["1", "2", "3"],
      answer: "2",
    },
    {
      question: "What is 5 - 3?",
      options: ["1", "2", "3"],
      answer: "2",
    },
    {
      question: "What is 5 - 3?",
      options: ["1", "2", "3"],
      answer: "2",
    },
    {
      question: "What is 5 - 3?",
      options: ["1", "2", "3"],
      answer: "2",
    },
  ];

  const handleSubmit = () => {
    const currentQuestion = questions[correctAnswers];
    if (selectedOption === currentQuestion.answer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
      setProgress(((correctAnswers + 1) / questions.length) * 100);
      new Audio(Right).play();
    } else {
      setIsCorrect(false);
      new Audio(Wrong).play();
    }
    setSelectedOption(''); // Clear selected option after answering
  };

  const handleTranslate = () => {
    new Audio(Right).play();
  };





  return (
    <div className="quiz-container p-4 pt-10 bg-light w-screen h-screen">

      <div className='flex flex-col items-center h-full'>


        <h1 className="text-4xl font-bold mb-20 p-5 shadow-md">Number Quiz</h1>

        <h3 className='mb-8 text-xl font-light '> Total Number of Questions: {questions.length } </h3>




        {correctAnswers < questions.length ? (
          <div>


            <div className="progress-bar bg-back rounded-full h-2 mb-9">
              <div
                className="bg-darkg h-2 rounded-full"
                style={{ width: `${(correctAnswers / questions.length) * 100}%` }}
              />
            </div>

            <h2 className="text-2xl mb-8">{questions[correctAnswers].question}</h2>
            {questions[correctAnswers].options.map((option, index) => (
              <div key={index} className="mb-5  flex gap-2 text-xl ">


                <input
                  id={index}
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2 cursor-pointer"
                />
                <label className='cursor-pointer' key={index} for={index}>
                  {option}
                </label>

              </div>
            ))}
            <div>
              <button onClick={handleSubmit} className="bg-gree text-whit p-4 rounded hover:bg-gree/50 mt-10">
                Submit
              </button>

              {/* <button onClick={handleTranslate} className="bg-blue-500 text-white p-2 rounded">
              Translate
            </button> */}

            </div>
            {isCorrect !== null && (
              <div className={`feedback font-bold mt-6 text-2xl animate-pulse  ${isCorrect ? 'text-gree' : 'text-re'}`}>
                {isCorrect ? 'Correct!' : 'Try Again!'}
              </div>
            )}
          </div>
        ) : (
          <h2 className="text-4xl text-center mt-4">Quiz Completed! You scored {correctAnswers} out of {questions.length}.</h2>
        )}


      </div>

    </div>
  );
};

export default NumberQuiz;