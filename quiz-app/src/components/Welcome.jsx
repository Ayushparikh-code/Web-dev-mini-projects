import React from 'react';

const WelcomeScreen = ({  startQuiz ,showInstructionsScreen }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-indigo-600">
            <h2 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h2>

            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg mt-4  mb-4" onClick={showInstructionsScreen} aria-label="Show Instructions" >
              Show Instructions </button>

            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg" onClick={startQuiz}  aria-label="Start Quiz">
                Start Quiz </button>
        </div>
    );
};

export default WelcomeScreen;