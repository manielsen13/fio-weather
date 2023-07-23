import logoImg from "../assets/logo.png";

function Logo() {
  return (
    <div className="flex flex-col items-center self-center gap-2 select-none">
      <img src={logoImg} className="w-20 h-auto"></img>
      <h1 className="text-2xl text-customGray">Weather</h1>
    </div>
  );
}

export default Logo;
