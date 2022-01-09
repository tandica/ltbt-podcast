import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div>
      <div>LTBT</div>
      <a href="https://twitter.com/LtbtPodcast">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
}
