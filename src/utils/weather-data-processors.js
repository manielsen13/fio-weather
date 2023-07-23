import { formatWeatherDate } from "./formatters";

const organizeWeatherDataByDay = (forecastData) => {
  const forecastDataByDay = {};

  forecastData.forEach((dataPoint) => {
    const date = formatWeatherDate(dataPoint.dt).split(" ")[0];
    if (!forecastDataByDay[date]) {
      forecastDataByDay[date] = {
        temperatures: [],
        weatherDescriptions: [],
        weatherIDs: [],
      };
    }
    forecastDataByDay[date].temperatures.push(dataPoint.main.temp);
    forecastDataByDay[date].weatherDescriptions.push(
      dataPoint.weather[0].description
    );
    forecastDataByDay[date].weatherIDs.push(dataPoint.weather[0].id);
  });

  return forecastDataByDay;
};

const getImportantForecastStatsByDay = (forecastDataByDay) => {
  const forecastStatsByDay = [];

  Object.keys(forecastDataByDay).forEach((date) => {
    const temperatures = forecastDataByDay[date].temperatures;
    const high = Math.ceil(Math.max(...temperatures));
    const low = Math.floor(Math.min(...temperatures));
    const weatherDescriptions = forecastDataByDay[date].weatherDescriptions;
    const weatherDescription = getMostFrequentElement(weatherDescriptions);
    const weatherIDs = forecastDataByDay[date].weatherIDs;
    const weatherID = getMostFrequentElement(weatherIDs);

    forecastStatsByDay.push({
      date,
      high,
      low,
      weatherDescription,
      weatherID,
    });
  });

  forecastStatsByDay.pop();
  return forecastStatsByDay;
};

function getMostFrequentElement(array) {
  return array
    .sort(
      (a, b) =>
        array.filter((v) => v === a).length -
        array.filter((v) => v === b).length
    )
    .pop();
}

export { organizeWeatherDataByDay, getImportantForecastStatsByDay };
