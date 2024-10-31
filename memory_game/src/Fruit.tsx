import crd from "./assets/images/card.png";
import './custom.css';

interface FruitType {
  img: string;
  id: number;
  matched: boolean;
}

interface FruitProps {
  fruit: { id: number; img: string };
  handleChoice: (fruit: FruitType) => void;
  flipped: boolean;
}

export default function Fruit({ fruit, handleChoice, flipped }: FruitProps): JSX.Element {
  const handleClick = () => {
    if (!flipped) {
      handleChoice(fruit as FruitType);
    }
  };

  return (
    <div className={`card w-28 h-40 sm:w-48 sm:h-64 cursor-pointer ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="inner">
        <img className="front" src={fruit.img} alt="Card front" />
        <img className="back" src={crd} alt="Card Back" />
      </div>
    </div>
  );
}
