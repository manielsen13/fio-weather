import WeatherImage from "./WeatherImage";

function DailyForecastCard({ day }) {
  return (
    <>
      <div className="cardContainer">
        <p className="date">{day.date}</p>
        <WeatherImage id={day.weatherID} />
        <p>Weather: {day.weatherDescription}</p>
        <div className="highLowContainer">
          <p>H: {day.high} °F</p>
          <p>L: {day.low} °F</p>
        </div>
      </div>
    </>
  );
}

export default DailyForecastCard;
