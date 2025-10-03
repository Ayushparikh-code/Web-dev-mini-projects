import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchbox"; 
// Fixed capitalization in import
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 27.84, 
    temp: 28.59,
    tempMin: 28.59,
    tempMax: 28.59,
    humidity: 35,
    weather: "scattered clouds",
  });

  // Define background image dynamically based on weather
  const bgImageUrl = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";

  return (
    <div 
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Ensures text is readable
      }}
    >
        <div className="weather-app">
    <h1 className="a">Weather App</h1>
    <div className="weather-container">
      <SearchBox updateInfo={setWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  </div>

    </div>
  );
}
