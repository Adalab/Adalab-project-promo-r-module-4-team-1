import logoAdalab from "../images/logo-adalab.png";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">Awesome Women-cards @2022</p>
      <img className="footer__logo" src={logoAdalab} alt="Logo Adalab" />
    </footer>
  );
};

export default Footer;
