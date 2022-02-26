import LightDesktop from "../images/bg-desktop-light.jpg";
import MoonIcon from "../images/icon-moon.svg";
import {useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext"
import SunIcon from "../images/icon-sun.svg"
import DarkDesktop from "../images/bg-desktop-dark.jpg"

function Header() {
  const {toggleTheme,theme}=useContext(ThemeContext)
  return (
    <div className="header">
      {theme? <img className="LightDesktop" src={LightDesktop} alt="" />:<img className="LightDesktop" src={DarkDesktop} alt="" /> }
      <div className="moon" onClick={toggleTheme}>
        {theme? <img className="moon" src={MoonIcon} alt="" /> : <img className="moon" src={SunIcon} alt="" />}
      </div>
      <h1 className="todo">TODO</h1>
    </div>
  );
}

export default Header;
