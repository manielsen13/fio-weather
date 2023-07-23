import thunderstormImg from "../assets/thunderstorm.png";
import rainImg from "../assets/rainy.png";
import snowImg from "../assets/snowy.png";
import mistImg from "../assets/misty.png";
import clearImg from "../assets/clear.png";
import cloudsImg from "../assets/cloudy.png";

function WeatherImage({ id }) {
  return (
    <>
      {id < 300 ? (
        <img src={thunderstormImg} className="w-24 h-auto"></img>
      ) : id < 600 ? (
        <img src={rainImg} className="w-24 h-auto"></img>
      ) : id < 700 ? (
        <img src={snowImg} className="w-24 h-auto"></img>
      ) : id < 800 ? (
        <img src={mistImg} className="w-24 h-auto"></img>
      ) : id === 800 ? (
        <img src={clearImg} className="w-24 h-auto"></img>
      ) : id > 800 ? (
        <img src={cloudsImg} className="w-24 h-auto"></img>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherImage;
