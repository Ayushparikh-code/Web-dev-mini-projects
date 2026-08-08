// src/Quizzes.js
import React, { useState, useEffect } from 'react';
import confetti from "canvas-confetti";



import A from '../assets/alpha.png'
import M from '../assets/mcq.png'
import N from '../assets/nums.png'

import { useNavigate } from "react-router-dom";

const quizzesData = [
  {
    id: 1,
    title: "Alphabet Quiz",
    image: A // Replace with your image path

  },
  {
    id: 2,
    title: "Number Quiz",
    image: M // Replace with your image path

  },
  {
    id: 3,
    title: "MCQ Quiz",
    image: N // Replace with your image path

  },
];




const Quizzes = () => {

useEffect(() => {
  var duration = 15 * 100;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#800080'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
}, [])

  


  // const history = useNavigate();

  // const handleQuizClick = (quizId) => {
  //   history.push(`/quiz/${quizId}`);
  // };
  const navigate = useNavigate();

  // State to track attempted quizzes
  const [attemptedQuizzes, setAttemptedQuizzes] = useState({});
  // console.log(attemptedQuizzes)
  // console.log(setAttemptedQuizzes)

  useEffect(() => {
    // Load attempted quizzes from localStorage
    const storedQuizzes = JSON.parse(localStorage.getItem('attemptedQuizzes')) || {};
    setAttemptedQuizzes(storedQuizzes);
  }, []);

  useEffect(() => {
    // Save attempted quizzes to localStorage whenever it changes
    localStorage.setItem('attemptedQuizzes', JSON.stringify(attemptedQuizzes));
  }, [attemptedQuizzes]);

  const handleQuizClick = (quizId) => {
    // Mark the quiz as attempted
    setAttemptedQuizzes((prev) => ({
      ...prev,
      [quizId]: true,
    }));

    // Navigate to the quiz page
    navigate(`/quiz/${quizId}`);
  };


  return (
    <div className="p-4 pt-20 bg-yello/70 w-screen mx-auto flex flex-col items-center min-h-screen gap-5 ">
      <h1 className="text-4xl font-bold rounded-xl animate-bounce text-blu mb-4 p-5 shadow shadow-whit">Kids Quizzes</h1>





      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

        {quizzesData.map((quiz) => (
          
          <div
            key={quiz.id}
            className="bg-blu/70 text-whit flex items-center justify-center p-4 rounded-lg shadow cursor-pointer"
            onClick={() => handleQuizClick(quiz.id)}
          >
            <img src={quiz.image} alt={quiz.title} className="w-full h-32 md:h-40 lg:h-48 object-cover border-2 rounded" />
            <div className='p-5 flex flex-col gap-4 items-center justify-center'>
              <h2 className="text-xl text-center font-semibold">{quiz.title}</h2>
              {/* <p className={`text-sm ${attemptedQuizzes[quiz.id] ? 'text-gree' : 'text-re'}`}>
              {attemptedQuizzes[quiz.id] ? 'Attempted' : 'Not Attempted'}
            </p> */}


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;