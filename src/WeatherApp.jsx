import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    humidity: 47,
    feelsLike: 25.66,
    humidity:61,
    temp: 25.4,
    maxTemp: 27,
    minTemp: 23.21,
    weather: "Haze",
  });
  let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
  }
  return (
    <div className="Weather">
      
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>
      <p><i>Weather App made by @arnab</i></p>
    </div>
  );
}
