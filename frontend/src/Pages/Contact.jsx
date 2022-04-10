import Navv from "../components/Nav";
import Footer from "../components/Footer";
import {
  fab,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Contact.scss";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>LTBT | Contact Us</title>
      </Helmet>
      <div className="homepage-header-image">
        <Navv />
      </div>
      <div>
        <div className="contact-container">
          <h1 className="contact-title">GET IN TOUCH</h1>{" "}
          <div className="contact-social-icons-container">
            <a href="https://www.instagram.com/letstalkbigtingz/">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="contact-social-icons"
              />
              @letstalkbigtingz
            </a>

            <a href="https://twitter.com/LtbtPodcast">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="contact-social-icons"
              />
              @ltbtpodcast
            </a>
            <a href="mailto:letstalkbigtingz@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="contact-social-icons"
              />
              letstalkbigtingz@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
