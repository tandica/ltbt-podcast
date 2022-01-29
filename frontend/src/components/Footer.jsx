import {
  fab,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">LTBT</div>
      <div className="footer-social-icons-container">
        <a href="https://www.instagram.com/letstalkbigtingz/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="footer-social-icons"
          />
        </a>
        <a href="https://twitter.com/LtbtPodcast">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="footer-social-icons"
          />
        </a>
        <a href="mailto:letstalkbigtingz@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="footer-social-icons"
          />
        </a>
      </div>
      <div className="footer-pagelinks">
        <a href="/episodes">EPISODES</a>
        <a href="/events">EVENTS</a>
        <a href="/about">ABOUT US</a>
        <a href="/store">STORE</a>
        <a href="/contact">CONTACT US</a>
      </div>
    </div>
  );
}
