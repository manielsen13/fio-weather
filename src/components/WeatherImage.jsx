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
        <img src={thunderstormImg}></img>
      ) : id < 600 ? (
        <img src={rainImg}></img>
      ) : id < 700 ? (
        <img src={snowImg}></img>
      ) : id < 800 ? (
        <img src={mistImg}></img>
      ) : id === 800 ? (
        <img src={clearImg}></img>
      ) : id > 800 ? (
        <img src={cloudsImg}></img>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherImage;
