import NumberMatchingGame from '@/Games/NumberMatchingGame'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";


import A from '@/assets/Guess.jpg'
import M from '@/assets/Balloon.jpg'



const gamesdata = [
  {
    id: 1,
    title: "Number Matching Game",
    image: A // Replace with your image path

  },
  {
    id: 2,
    title: "Balloonpop Game",
    image: M // Replace with your image path

  },
  // {
  //   id: 3,
  //   title: "MCQ Quiz",
  //   image: N // Replace with your image path

  // },
];

function Games() {
  useEffect(() => {

    var end = Date.now() + (25 * 100);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());

    // console.log('open')
  }, [])

  const navigate = useNavigate();
  
  const handleQuizClick = (gameId) => {
  
    navigate(`/games/${gameId}`)
  }

  return (
    <div className="p-4 pt-20 bg-yello w-screen mx-auto flex flex-col items-center min-h-screen gap-5 ">

      <h1 className="text-4xl font-bold rounded-xl animate-bounce text-blu mb-4 p-5 shadow shadow-whit">Games </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {gamesdata.map((game) => (

          <div
            key={game.id}
            className="bg-blu/70 text-whit flex items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleQuizClick(game.id)} >

            <img src={game.image} alt={game.title} className=" w-full h-32 md:h-40 lg:h-48 object-cover border-2 rounded" />

            <div className='p-5 flex flex-col gap-4 items-center justify-center'>
              <h2 className="text-xl text-center font-semibold">{game.title}</h2>
            </div>

          </div>

        ))}


      </div>

      {/* <NumberMatchingGame /> */}

    </div>
  )
}

export default Games
