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
        <img
          src={thunderstormImg}
          className="w-24 h-auto"
          alt="lightning image"
        ></img>
      ) : id < 600 ? (
        <img src={rainImg} className="w-24 h-auto" alt="rain image"></img>
      ) : id < 700 ? (
        <img src={snowImg} className="w-24 h-auto" alt="snow image"></img>
      ) : id < 800 ? (
        <img src={mistImg} className="w-24 h-auto" alt="water image"></img>
      ) : id === 800 ? (
        <img src={clearImg} className="w-24 h-auto" alt="sun image"></img>
      ) : id > 800 ? (
        <img src={cloudsImg} className="w-24 h-auto" alt="cloud image"></img>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherImage;
