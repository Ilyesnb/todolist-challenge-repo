import LightDesktop from "../../images/bg-desktop-light.jpg";
import MoonIcon from "../../images/icon-moon.svg";
function Header() {
  return (
    <div className="header">
      <img className="LightDesktop" src={LightDesktop} alt="" />
      <img className="moon" src={MoonIcon} alt="" />
      <h1 className="todo">TODO</h1>
    </div>
  );
}

export default Header;
