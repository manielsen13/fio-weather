import { useEffect, useState } from "react";
import WeatherImage from "./WeatherImage";
import { getCapitalizedWords, formatTimeEST } from "../utils/formatters";

function CurrentWeatherCard({ currentWeatherData }) {
  const [currentTime, setCurrentTime] = useState("");
  const [descriptionWords, setDescriptionWords] = useState([]);

  useEffect(() => {
    setCurrentTime(formatTimeEST(new Date()));
    setDescriptionWords(
      getCapitalizedWords(currentWeatherData.weather[0].description)
    );
  }, [currentWeatherData]);

  return (
    <>
      <div className="cardContainer">
        <p className="currentTime">{currentTime}</p>
        <WeatherImage id={currentWeatherData.weather[0].id} />
        <p>{Math.ceil(currentWeatherData.main.temp)} °F</p>
        <p>{descriptionWords.join(" ")}</p>
      </div>
    </>
  );
}

export default CurrentWeatherCard;
