
import{Link} from 'react-router-dom';
import logo from "../images/woman_crop.png"
import "../styles/layout/HeaderLanding.scss";

const Header = () => {
  return (
    <header className="header">
    <Link to='/' className="header__link"> <img
          src={logo}
          alt="logo awesome profile-cards"
          className="header__link--img"
        /></Link>
     
     </header>
  );
};

export default Header;
