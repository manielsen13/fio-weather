import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const formatTimeEST = (timeInUTC) => {
  const estTimezone = "America/New_York";
  const estTime = utcToZonedTime(timeInUTC, estTimezone);

  const formattedHour = format(estTime, "hh");
  const formattedMinute = format(estTime, "mm");

  let formattedTime;

  if (formattedHour[0] === "0") {
    formattedTime = `${formattedHour[1]}:${formattedMinute}`;
  } else {
    formattedTime = `${formattedHour}:${formattedMinute}`;
  }
  return formattedTime;
};

const getCapitalizedWords = (string) => {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words;
};

const formatWeatherDate = (timestamp) => {
  const timezone = "America/New_York";
  const utcDate = parseISO(new Date(timestamp * 1000).toISOString());
  const estDate = utcToZonedTime(utcDate, timezone);
  return format(estDate, "MM-dd-yyyy HH:mm:ss");
};

export { formatTimeEST, getCapitalizedWords, formatWeatherDate };
