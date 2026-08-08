import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Right from '@/assets/Right.wav'
import Wrong from '@/assets/Wrong.wav'
import Pop from '@/assets/Pop.mp3'

const AlphabetBalloonPopGame = () => {
  const [targetAlphabet, setTargetAlphabet] = useState("");
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");

  const alphabetSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const poppingSound = new Audio(Pop);
  const correctSound = new Audio(Right);
  const wrongSound = new Audio(Wrong);

  const getBalloonCount = () => Math.min(12 + score, 20); // Increase balloons with score

  useEffect(() => {
    startGame();
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

  const startGame = () => {
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    generateNewQuestion();
  };

  const generateNewQuestion = () => {
    const randomAlphabet =
      alphabetSet[Math.floor(Math.random() * alphabetSet.length)];
    setTargetAlphabet(randomAlphabet);
    setBalloons(generateRandomBalloons(randomAlphabet, getBalloonCount()));
    speakTargetAlphabet(randomAlphabet);
  };

  const generateRandomBalloons = (correctAlphabet, count) => {
    const balloonSet = new Set();
    const balloonColors = new Map();

    balloonSet.add(correctAlphabet);
    balloonColors.set(correctAlphabet, getRandomColor());

    while (balloonSet.size < count) {
      const randomLetter =
        alphabetSet[Math.floor(Math.random() * alphabetSet.length)];
      if (!balloonSet.has(randomLetter)) {
        balloonSet.add(randomLetter);
        balloonColors.set(randomLetter, getRandomColor());
      }
    }

    const balloonArray = Array.from(balloonSet).sort(() => Math.random() - 0.5);
    return balloonArray.map((letter) => ({
      letter,
      color: balloonColors.get(letter),
    }));
  };

  const getRandomColor = () =>
    `hsl(${Math.random() * 360}, 80%, 70%)`; // Pastel colors

  const speakTargetAlphabet = (alphabet) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(
      `Pop the balloon with the letter ${alphabet}`
    );
    utterance.pitch = 1.2;
    utterance.rate = 1;
    utterance.voice = synth.getVoices()[2];
    synth.speak(utterance);
  };

  const handleReplay = () => {
    speakTargetAlphabet(targetAlphabet);
    // console.log("working")
  };

  const handleBalloonClick = (selectedAlphabet, index) => {
    if (gameOver) return;

    if (selectedAlphabet === targetAlphabet) {
      correctSound.play();
      poppingSound.play();
      // className='balloon-pop';
      // ToggleEvent(balloon - pop)
      setFeedback("Correct! 🎉");
      setScore(score + 1);
      triggerCelebration();

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


      setBalloons((prev) =>
        prev.filter((_, balloonIndex) => balloonIndex !== index)
      );



      const updatedBalloons = [...balloons];
      updatedBalloons[index] = { ...updatedBalloons[index], popped: true }; // Mark balloon as popped
      setBalloons(updatedBalloons);

      setTimeout(() => {
        setFeedback("");
        generateNewQuestion();
      }, 1000);
    } else {
      wrongSound.play();
      setFeedback("Wrong! ❌");
      setTimeout(() => setFeedback(""), 1000);
    }
  };

  const triggerCelebration = () => {
    const confetti = document.createElement("div");
    confetti.className = "absolute top-0 left-0 w-full h-full bg-green-300 z-50 flex items-center justify-center";
    confetti.innerHTML = `<h1 class="text-5xl font-bold text-white animate-bounce">🎉 Correct! 🎉</h1>`;
    document.body.appendChild(confetti);

    const celebrationSound = new Audio(Right);
    celebrationSound.play();

    setTimeout(() => document.body.removeChild(confetti), 900);
  };


  const getGridSizeStyle = () => {
    const size = Math.ceil(Math.sqrt(balloons.length)); // Calculate rows and columns
    const gridSize = Math.max(size, 3); // Minimum 3x3 grid
    return {
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    };
  };


  const [isActive, setIsActive] = useState(false)

  const toggleClass = () => {
    setIsActive(!isActive)
  }



  if (gameOver) {
    const EndSound = new Audio(Wrong);
    EndSound.play();
  }

  return (

    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-orang/50 p-5 text-center">
      {gameOver ? (

        <div className="text-center">
          <h1 className="text-4xl font-bold text-re mb-6">Game Over! 🎉</h1>
          <h2 className="text-2xl mb-4">Your Score: {score}</h2>
          <button
            onClick={startGame}
            className="mt-6 px-6 py-3 bg-yello text-white rounded-lg shadow-md hover:bg-whit"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>


          <h1 className="text-4xl font-bold mb-6">Alphabet Balloon Pop Game</h1>

          <div className="flex justify-center items-center mb-10">
            <h2 className="text-2xl ">
              Pop the balloon with the letter:{" "}
              <span className="text-blue-600">{targetAlphabet}</span>
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
            className="grid gap-4 mb-6"
            style={getGridSizeStyle()} // Apply dynamic grid size
          >
            {balloons.map((balloon, index) => (
              <button
                key={index}
                className={`w-20 h-20 text-2xl font-bold text-white border-2 border-blue-400 rounded-full shadow-md ${balloon.popped ? "balloon-pop" : ""
                  }`}
                style={{
                  backgroundColor: balloon.color,

                }}
                onClick={() => handleBalloonClick(balloon.letter, index)}
                disabled={balloon.popped}
              >
                {balloon.letter}
              </button>
            ))}
          </div>
          {/* <p className="text-lg  mb-4">{feedback}</p> */}
          <h3 className="text-lg mt-6 font-bold">Score: {score}</h3>
          <h3 className="text-lg mt-2">Time Left: {timeLeft}s ⏱️</h3>
        </>
      )}
    </div>
  );
};

export default AlphabetBalloonPopGame;
