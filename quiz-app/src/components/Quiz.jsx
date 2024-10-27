import React, { useState } from 'react';

const Quiz = ({questions, handleQuizCompletion}) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const currentQuestion = questions[currentQuestionIndex];

    // function to handle answer
    const handleAnswer = (isCorrect) => {

      setShowFeedback(true);
      if (isCorrect) {
          setFeedbackMessage('Correct!');
          setScore(score + 1);
      } else {
          setFeedbackMessage('Wrong!');
      }

        // Set a timeout to hide the feedback message and move to the next question after 1 second
        setTimeout(() => {

          setShowFeedback(false);
          if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
                handleQuizCompletion(score);
          }
      }, 1000); // Delay of 1000 milliseconds (1 second)
  };

     // Calculate the progress percentage
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className=" bg-white p-4">
              {/* Displays the current question */}
            <h2 className="text-xl mb-4 text-black">  {currentQuestionIndex + 1}. {currentQuestion.question} </h2>
            <div className="flex flex-col space-y-4">
                    {/* Maps over the answers array and creates a button for each answer */}
                {currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleAnswer(answer.isCorrect)}
                    >
                        {answer.text} {/**Displays answer */}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {showFeedback && <p>{feedbackMessage}</p>}
            </div>

            {/* Progress bar container */}
            <div className="w-full bg-indigo-50 rounded-full h-4 mt-4 relative">
                <div className="bg-indigo-500 h-4 rounded-full text-white flex items-center justify-center" style={{ width: `${progressPercentage}%` }}>
                    <p className="text-center w-full">{currentQuestionIndex + 1} / {questions.length}</p>
                </div>
            </div> 
    </div>
    );
};

export default Quiz;
