import {
  fab,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div>
      <div>LTBT</div>
      <div>
        <a href="https://www.instagram.com/letstalkbigtingz/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/LtbtPodcast">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="mailto:letstalkbigtingz@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div>
        <a>EPISODES</a>
        <a>EVENTS</a>
        <a>ABOUT US</a>
        <a>STORE</a>
        <a>CONTACT US</a>
      </div>
    </div>
  );
}
