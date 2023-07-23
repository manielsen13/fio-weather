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
    <div className="appContainer">
      <Logo />
      <Search
        forecastData={forecastData}
        setForecastData={setForecastData}
        setCurrentWeatherData={setCurrentWeatherData}
        currentWeatherData={currentWeatherData}
      />
      {currentWeatherData && forecastData && <p>Current Weather</p>}
      {currentWeatherData && forecastData && (
        <CurrentWeatherCard currentWeatherData={currentWeatherData} />
      )}
      {currentWeatherData && forecastData && <p>5-Day Forecast</p>}
      {currentWeatherData &&
        forecastData &&
        getImportantForecastStatsByDay(
          organizeWeatherDataByDay(forecastData.list)
        ).map((day) => {
          return <DailyForecastCard day={day} key={day.date} />;
        })}
    </div>
  );
}

export default App;
