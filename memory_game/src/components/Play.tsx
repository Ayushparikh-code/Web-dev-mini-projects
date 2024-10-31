import { useState, useEffect } from 'react';
import apple from "../assets/images/apple.svg";
import banana from "../assets/images/banana.svg";
import orange from "../assets/images/Orange.svg";
import bg from "../assets/images/bg.png";
import watermelon from "../assets/images/watermelon.webp";
import cherry from "../assets/images/cherry.webp";
import pine from "../assets/images/pine.webp";
import Fruit from '../Fruit';
import arr from '../assets/images/arr.svg'
import msg from '../assets/images/msg.svg'
import {Link} from "react-router-dom"
import '../custom.css'
import monkey from "../assets/images/monkey.svg";

interface FruitType {
  img: string;
  id: number;
  matched: boolean;
}

function Play(): JSX.Element {
  const [fruits, setFruits] = useState<FruitType[]>([]);
  const [one, setOne] = useState<FruitType | null>(null);
  const [two, setTwo] = useState<FruitType | null>(null);
  const [popup, setPopup] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [turn, setTurn] = useState<number>(0);

  const fruitsImages: FruitType[] = [
    { img: apple, id: 1, matched: false },
    { img: banana, id: 2, matched: false },
    { img: pine, id: 3, matched: false },
    { img: orange, id: 4, matched: false },
    { img: cherry, id: 5, matched: false },
    { img: watermelon, id: 6, matched: false },
  ];

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = (): void => {
    const shuffled: FruitType[] = [...fruitsImages, ...fruitsImages]
      .sort(() => Math.random() - 0.5)
      .map((fruit) => ({ ...fruit, id: Math.random() }));

    setFruits(shuffled);
  };

  const handleChoice = (card: FruitType): void => {
    setTurn(turn + 0.5);
    if (!one) {
      setOne(card);
    } else if (!two) {
      setTwo(card);
    }
  };

  useEffect(() => {
    if (one && two) {
      if (one.img === two.img) {
        setScore(score + 10);
        setFruits((prevFruits) =>
          prevFruits.map((item) =>
            item.img === one.img ? { ...item, matched: true } : item
          )
        );
      }
      
      setTimeout(() => {
        setOne(null);
        setTwo(null);
      }, 500);
    }
    if(score === 60) {
      setPopup(true);
    }
  }, [one, two, popup]);

  const resetGame = (): void => {
    setFruits([]);
    setOne(null);
    setTwo(null);
    setScore(0);
    setPopup(false);
    setTurn(0);
    shuffleCards();
  };

  const checkScore = () => {
    alert(`Your current score is: ${score}/60 in ${Math.floor(turn)}-Turn`);
  };
  
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center overflow-hidden'>
        <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${bg})`}}></div>

        <div className='absolute flex flex-col sm:text-2xl text-xl gap-2 top-4 right-4 text-[#11AEC6] font-bold items-center'>
          <span>Score: {score}/60</span>
          <span>{Math.floor(turn)} - turn</span>
        </div>
        <div className="absolute top-20 sm:mx-auto w-32 sm:w-[16rem] flex justify-center items-center">
          <span className="text-[#11AEC6] font-bold uppercase text-xs sm:text-2xl z-10">
            select a card !
          </span>
          <img className="absolute w-[30rem]" src={msg} alt="" />
        </div>
        <Link to="/"><img className='absolute w-16 sm:w-24 top-4 left-4' src={arr} alt="" /></Link>
        <div className='absolute top-10 w-screen sm:w-[90vw] flex flex-wrap sm:gap-2 mt-20 gap-0 justify-center p-0 m-0'>
          {fruits.map((fruit) => (
            <Fruit
              fruit={fruit}
              key={fruit.id}
              handleChoice={handleChoice}
              flipped={fruit === one || fruit === two || fruit.matched}
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center w-full py-10 gap-4 z-20'>
        <button className="button hidden sm:block sm:absolute bottom-8 left-14 text-white py-2 px-6 rounded-lg" onClick={resetGame}>Reset Game</button>
        <button className="button hidden sm:block sm:absolute bottom-8 right-14 text-white py-2 px-6 rounded-lg" onClick={checkScore}>Check Score</button>
      </div>
      {popup && 
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
         <div className='card_box w-96 sm:w-[40rem] h-max sm:h-96 border rounded-lg font-serif shadow-2xl   bg-yellow-300 flex justify-center items-center font-bold text-red-500 text-3xl sm:flex-row flex-col mx-4 gap-4 py-4'>
          <div className='flex flex-col justify-center items-center p-4'>
          <span>Congratulations 🎉</span><span> You won</span>
          <span>Score :  {score}</span>
          <span>Turn :  {turn}</span>
          <div 
          onClick={resetGame}
          className='flex gap-1 mt-4 text-xl bg-[#FFF5D1] text-black border-white p-1 sm:px-2 rounded-lg cursor-pointer'>
            <button>Replay </button>
            <img className='w-12' src={banana} alt="" />
          </div>
          </div>
          <img className='w-44 sm:w-64' src={monkey} alt="" />
         </div>
      </div>}
    </>
  );
}

export default Play;
