import { useEffect, useState } from "react";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import WeatherImage from "./WeatherImage";

function CurrentWeatherCard({ currentWeatherData }) {
  const [currentTime, setCurrentTime] = useState("");
  const [descriptionWords, setDescriptionWords] = useState([]);

  useEffect(() => {
    setCurrentTime(getCurrentTimeEST());
    setDescriptionWords(getCapitalizedDescriptionWords());
  }, [currentWeatherData]);

  const getCurrentTimeEST = () => {
    const currentUTCTime = new Date();
    const estTimezone = "America/New_York";
    const estTime = utcToZonedTime(currentUTCTime, estTimezone);

    const formattedHour = format(estTime, "hh");
    const formattedMinute = format(estTime, "mm");

    let formattedTime;

    if (formattedHour[0] === "0") {
      formattedTime = `${formattedHour[1]}:${formattedMinute}`;
    } else {
      formattedTime = `${formattedHour[1]}:${formattedMinute}`;
    }
    return formattedTime;
  };

  const getCapitalizedDescriptionWords = () => {
    const words = currentWeatherData.weather[0].description.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words;
  };

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
