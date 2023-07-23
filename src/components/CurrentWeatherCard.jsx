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
      <div className="select-none relative flex flex-col gap-10 text-customGray items-center justify-center p-10 w-72 border-customLightBlue border-4 rounded-3xl">
        <p className="absolute -top-8 left-6 text-2xl text-customLightBlue bg-customBlack p-3">
          {currentTime}
        </p>
        <WeatherImage id={currentWeatherData.weather[0].id} />
        <p className="text-3xl">{Math.ceil(currentWeatherData.main.temp)} °F</p>
        <p>{descriptionWords.join(" ")}</p>
      </div>
    </>
  );
}

export default CurrentWeatherCard;
