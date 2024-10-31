import bg from "../assets/images/bg2.png";
import {Link} from "react-router-dom" 
import monkey from "../assets/images/monkey.svg";
import msg from "../assets/images/msg.svg";
import "../custom.css";

function Home(): JSX.Element {
  return (
    <div className="relative h-screen overflow-hidden w-full flex justify-center items-center">
      <img
        className="img absolute object-cover w-full h-full"
        src={bg}
        alt=""
      />
      <img className="absolute bottom-0 w-3/2" src={monkey} alt="" />
      <div className="relative bottom-40 left-80 w-[20rem] flex justify-center items-center">
        <span className="text-[#11AEC6] font-bold uppercase text-3xl z-10">
          Welcome Kiddo !
        </span>
        <img className="absolute w-[30rem]" src={msg} alt="" />
      </div>
      <Link to="/next">
        <button className="button absolute bottom-180 sm:bottom-20 right-40 text-3xl font-bold">
          START
        </button>
      </Link>
    </div>
  );
}

export default Home;
