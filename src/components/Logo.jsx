import logoImg from "../assets/logo.png";

function Logo() {
  return (
    <div className="logoContainer">
      <img src={logoImg} className="image image--logo"></img>
      <h1>Weather</h1>
    </div>
  );
}

export default Logo;
