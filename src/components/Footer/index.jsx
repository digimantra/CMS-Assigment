import "./Footer.scss";
import { footerLinks } from "../../utils/constants";

const Footer = () => {

  return (
    <footer className="footer">
      <hr className="divider" />
      <div className="footer-content">
        {footerLinks?.map((link, index) => (
          <a key={index} href={link?.link}>
            {link?.text}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
