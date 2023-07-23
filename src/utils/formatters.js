import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const formatTimeEST = (timeInUTC) => {
  console.log(timeInUTC);
  const estTimezone = "America/New_York";
  const estTime = utcToZonedTime(timeInUTC, estTimezone);
  console.log(estTime);

  const formattedHour = format(estTime, "hh");
  const formattedMinute = format(estTime, "mm");
  console.log(formattedHour);
  console.log(formattedHour[0]);

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

export { formatTimeEST, getCapitalizedWords };
