import { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  return (
    <div className="appContainer">
      <Logo />{" "}
      <Search
        forecastData={forecastData}
        setForecastData={setForecastData}
        setCurrentWeatherData={setCurrentWeatherData}
        currentWeatherData={currentWeatherData}
      />
    </div>
  );
}

export default App;
