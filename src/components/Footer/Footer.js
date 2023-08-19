import footer from "../../assets/desktop/footer_desktop.png";
import mobileFooter from "../../assets/mobile/mobileFooter.png";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={footer} alt="footer" className="desktop-footer" />
      <img src={mobileFooter} alt="footer" className="mobile-footer" />
    </div>
  );
}

export default Footer;
