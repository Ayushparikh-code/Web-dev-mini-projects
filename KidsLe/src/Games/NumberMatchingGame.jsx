

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Right from '@/assets/Right.wav'
import Wrong from '@/assets/Wrong.wav'

const NumberMatchingGame = () => {
    const [gridNumbers, setGridNumbers] = useState([]);
    const [targetNumber, setTargetNumber] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);
    const [gridSize, setGridSize] = useState(3); // Start with a 3x3 grid
    const [timeLeft, setTimeLeft] = useState(30); // Timer in seconds
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        generateGrid();
    }, []);



    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setGameOver(true);
        }
    }, [timeLeft, gameOver]);

    // Generate random numbers and target number
    const generateGrid = () => {
        const totalCells = gridSize * gridSize;
        const numbers = Array.from({ length: totalCells }, () => Math.floor(Math.random() * 10));
        setGridNumbers(numbers);
        const randomTarget = numbers[Math.floor(Math.random() * numbers.length)];
        setTargetNumber(randomTarget);
        speakTargetNumber(randomTarget);
    };





    // Use Web Speech API to speak the target number
    const speakTargetNumber = (number) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(`Find the number ${number}`);
        utterance.pitch = 1.2;
        utterance.rate = 1;
        utterance.voice = synth.getVoices()[2];  // Use the first available voice
        synth.speak(utterance);
    };



    // Replay the question
    const handleReplay = () => {
        speakTargetNumber(targetNumber);
        // console.log("working")
    };

    // Handle number click
    const handleNumberClick = (number) => {
        if (number === targetNumber) {
            setFeedback("Correct! 🎉");
            setScore(score + 1);
            

            var count = 400;
            var defaults = {
              origin: { y: 0.7 }
            };
            
            function fire(particleRatio, opts) {
              confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
              });
            }
            
            fire(0.25, {
              spread: 26,
              startVelocity: 55,
            });
            fire(0.2, {
              spread: 60,
            });
            fire(0.35, {
              spread: 100,
              decay: 0.91,
              scalar: 0.8
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              scalar: 1.2
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 45,
            });


            triggerCelebration();

            setTimeout(() => {
                setFeedback("");
                if (score % 3 === 0) setGridSize((prev) => Math.min(prev + 1, 5)); // Increase difficulty after every 3 correct answers
                generateGrid();
            }, 1500);
        } else {
            setFeedback("Oops! Try Again.");
            setTimeout(() => setFeedback(""), 1500);
        }
    };

    // Celebration Animation
    const triggerCelebration = () => {
        const confetti = document.createElement("div");
        confetti.className = "absolute top-0 left-0 w-full h-full bg-green-300 z-50 flex items-center justify-center";
        confetti.innerHTML = `<h1 class="text-5xl font-bold text-white animate-bounce">🎉 Correct! 🎉</h1>`;
        document.body.appendChild(confetti);

        const celebrationSound = new Audio(Right);
        celebrationSound.play();

        setTimeout(() => document.body.removeChild(confetti), 1500);
    };

    if (gameOver) {
        const EndSound = new Audio(Wrong);
        EndSound.play();
    }
    return (
        <div className="min-h-screen w-screen flex flex-col items-center text-center justify-center bg-try">
            {gameOver ? (
                <>
                    <h1 className="text-4xl font-bold text-re mb-4">Time's Up!</h1>
                    <h2 className="text-2xl">Your Final Score: {score}</h2>
                    <button
                        onClick={() => {
                            setGameOver(false);
                            setScore(0);
                            setTimeLeft(30);
                            // setGridSize(3);
                            generateGrid();
                        }}
                        className="mt-6 px-6 py-3 bg-yello text-white rounded-lg shadow-md hover:bg-whit"
                    >
                        Play Again
                    </button>
                </>
            ) : (

                <>
                    <div className="min-h-screen w-screen flex flex-col items-center  justify-center bg-orang">
                        <h1 className="text-4xl font-bold mb-6">Number Matching Game</h1>
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl mr-4">
                                Find the number : <span className="text-re">{targetNumber}</span>
                            </h2>
                            <button
                                onClick={handleReplay}
                                className="ml-4 px-4 py-2 bg-try/60 text-whit rounded-md shadow-lg hover:bg-try/80"
                            >
                                Listen Again
                            </button>

                        </div>

                        <p className="text-lg text-gree mb-4">{feedback}</p>
                        <div
                            className={`grid gap-4`}
                            style={{
                                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                                gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                            }}
                        >
                            {gridNumbers.map((num, index) => (
                                <button
                                    key={index}
                                    className="w-20 h-20 text-2xl bg-yello border-2 rounded-3xl hover:bg-light"
                                    onClick={() => handleNumberClick(num)}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Score: {score}</h3>
                        <h3 className="mt-2 text-lg">Time Left: {timeLeft}s ⏱️</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default NumberMatchingGame;
