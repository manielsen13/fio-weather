import { useState } from "react";
import axios from "axios";
import abbreviations from "../data/state-abbreviations.json";

function Search({
  setCurrentWeatherData,
  setForecastData,
  forecastData,
  currentWeatherData,
}) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //checks
    if (city === "" || state === "") {
      alert("Please fill out both a city and a state.");
      return;
    }
    if (abbreviations.states.includes(state) === false) {
      alert("Invalid state abbreviation. Please enter a valid state.");
      return;
    }
    //try api call
    try {
      await fetchData();
    } catch {
      setCurrentWeatherData(null);
      setForecastData(null);
      console.error("API error.");
      alert(
        "Hey! You may have entered an invalid city name. Please enter a valid city name and try again. If you're still recieving an error with a valid city name, there's a problem with the weather API, and you'll have to wait a moment and try again."
      );
    }
  };

  const handleReset = () => {
    setCity("");
    setState("");
    setForecastData(null);
    setCurrentWeatherData(null);
  };

  const fetchData = async () => {
    const currentWeatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},US&units=imperial&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    setCurrentWeatherData(currentWeatherResponse.data);
    setForecastData(forecastResponse.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="inptContainer">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="inpt inpt--city"
          />
          <input
            type="text"
            placeholder="ST"
            value={state}
            onChange={(e) => setState(e.target.value.toUpperCase())}
            className="inpt inpt--state"
          />
        </div>

        <button type="submit" className="btn btn--search">
          Search
        </button>

        {forecastData && currentWeatherData && (
          <button
            type="button"
            className="btn btn--reset"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </form>
    </>
  );
}

export default Search;
