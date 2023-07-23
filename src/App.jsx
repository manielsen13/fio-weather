import { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import {
  organizeWeatherDataByDay,
  getImportantForecastStatsByDay,
} from "./utils/weather-data-processors";
import DailyForecastCard from "./components/DailyForecastCard";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  return (
    <div className="flex flex-col mt-20 gap-20 w-screen items-center justify-center">
      <Logo />
      <Search
        forecastData={forecastData}
        setForecastData={setForecastData}
        setCurrentWeatherData={setCurrentWeatherData}
        currentWeatherData={currentWeatherData}
      />
      {currentWeatherData && forecastData && (
        <p className="text-3xl text-customGray select-none">Current Weather</p>
      )}
      {currentWeatherData && forecastData && (
        <CurrentWeatherCard currentWeatherData={currentWeatherData} />
      )}
      {currentWeatherData && forecastData && (
        <p className="text-3xl text-customGray select-none">5-Day Forecast</p>
      )}
      {currentWeatherData && forecastData && (
        <div className="flex flex-wrap gap-10 justify-center">
          {getImportantForecastStatsByDay(
            organizeWeatherDataByDay(forecastData.list)
          ).map((day) => {
            return <DailyForecastCard day={day} key={day.date} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
