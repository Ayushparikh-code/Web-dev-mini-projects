import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import WelcomeScreen from './components/Welcome';
import questions from './components/Questions';
import Quiz from './components/Quiz';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  // Function to start the quiz by setting isQuizStarted to true
  const startQuiz = () => {
    setIsQuizStarted(true);
    setShowInstructions(false);
    setShowWelcomeScreen(false);
  };

  // Function to show instructions by setting showInstructions to true
  const showInstructionsScreen = () => {
    setShowInstructions(true);
    setShowWelcomeScreen(false);
  };

  // Function to handle the completion of the quiz
  const handleQuizCompletion = (score) => {
    setFinalScore(score);
    setIsQuizComplete(true);
  };

  // Function to reset the quiz state for retaking the quiz
  const retakeQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizComplete(false);
    setFinalScore(0);
    setShowWelcomeScreen(true);
  };

  return (
    <div className="min-h-screen bg-white text-indigo-600">
      <Navbar />
      {/* Conditional rendering based on the state of the quiz */}
      {showWelcomeScreen ? (
        <WelcomeScreen showInstructionsScreen={showInstructionsScreen} startQuiz={startQuiz} />
      ) : showInstructions ? (
        <Instructions startQuiz={startQuiz} />
      ) : !isQuizStarted ? (
        <WelcomeScreen startQuiz={startQuiz} />
      ) : !isQuizComplete ? (
        <Quiz questions={questions} handleQuizCompletion={handleQuizCompletion} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-4xl font-bold">Quiz Complete!</h2>
          <p className="text-xl mt-4">Your Score: {finalScore}/{questions.length}</p>
          <button className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded-lg" onClick={retakeQuiz}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default App;