// src/AlphabetQuiz.js
import React, { useState } from 'react';
import { FaRegHandPointRight } from "react-icons/fa";
import Right from '@/assets/Right.wav'
import Wrong from '@/assets/Wrong.wav'


const AlphabetQuiz = () => {
  const [progress, setProgress] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);



  const questions = [
    { question: "What is the first letter of the alphabet?", answer: "A" },
    { question: "What is the second letter of the alphabet?", answer: "B" },
    { question: "What is the third letter of the alphabet?", answer: "C" },
  ];

  const handleAnswer = () => {
    const currentQuestion = questions[correctAnswers];
    if (userAnswer.toUpperCase() === currentQuestion.answer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
      setProgress(((correctAnswers + 1) / questions.length) * 100);

      new Audio(Right).play();
    } else {
      setIsCorrect(false);
      new Audio(Wrong).play();
    }
    setUserAnswer(''); // Clear input after answering
  };

  const handleTranslate = () => {
    new Audio('/cartoon-voice.mp3').play();
  };




  return (
    <div className="quiz-container p-4 pt-10 bg-light w-screen h-screen">

      <div className='flex flex-col items-center h-full'>

        <h1 className="text-4xl font-bold mb-20 p-5 shadow-md ">Alphabet Quiz</h1>

        <h3 className='mb-8 text-xl font-light '> Total Number of Questions: {questions.length } </h3>



        {correctAnswers < questions.length ? (
          <div>
            <div className="progress-bar bg-back rounded-full h-2 mb-9 ">

              <div
                className="bg-darkg h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className='flex gap-5 items-center mb-10'>
              <FaRegHandPointRight />
              <h2 className="text-2xl ">{questions[correctAnswers].question}</h2>

            </div>


            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="border p-2 rounded mb-10 bg-back text-blu"
              placeholder="Type your answer"
            />
            <div>
              <button onClick={handleAnswer} className="bg-gree text-whit p-4 rounded hover:bg-gree/50">
                Submit
              </button>

              {/* <button onClick={handleTranslate} className="bg-blue-500 text-white p-2 rounded">
                Translate
              </button> */}

            </div>
            {isCorrect !== null && (
              <div className={`feedback mt-6 text-2xl ${isCorrect ? 'text-sky' : 'text-re'}`}>
                {isCorrect ? 'Correct!' : 'Try Again!'}
              </div>
            )}
          </div>
        ) : (
          <h2 className="text-4xl mt-4 ">Quiz Completed! You got {correctAnswers} out of {questions.length} correct.</h2>
        )}


      </div>
    </div>
  );
};

export default AlphabetQuiz;