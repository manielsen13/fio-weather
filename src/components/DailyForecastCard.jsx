import WeatherImage from "./WeatherImage";
import { getCapitalizedWords } from "../utils/formatters";
function DailyForecastCard({ day }) {
  return (
    <>
      <div className="select-none m-6 relative flex flex-col gap-10 text-customGray items-center justify-center p-10 w-72 border-customLightBlue border-4 rounded-3xl">
        <p className="absolute -top-8 left-6 text-2xl text-customLightBlue bg-customBlack p-3">
          {day.date}
        </p>
        <WeatherImage id={day.weatherID} />
        <p className="text-xl">
          {getCapitalizedWords(day.weatherDescription).join(" ")}
        </p>
        <div className="text-lg">
          <p>H: {day.high} °F</p>
          <p>L: {day.low} °F</p>
        </div>
      </div>
    </>
  );
}

export default DailyForecastCard;
