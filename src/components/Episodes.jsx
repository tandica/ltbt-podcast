import Nav from "./Nav";
import "../styles/Episodes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

export default function Episodes() {
  return (
    <div>
      <div className="episodes-header-image">
        <Nav />
      </div>
      <div>
        <h1 className="episodes-title">LISTEN TO OUR PODCAST</h1>
        <div>
          <a href="https://open.spotify.com/show/1aK5PXUKIrhbv10ZHaMpKo?si=1a1c846310fd42a6">
            <FontAwesomeIcon
              icon={faSpotify}
              size="2x"
              className="footer-social-icons"
            />
          </a>
          <a href="https://open.spotify.com/show/1aK5PXUKIrhbv10ZHaMpKo">
            <FontAwesomeIcon
              icon={faSoundcloud}
              size="2x"
              className="footer-social-icons"
            />
          </a>
          <a href="https://podcasts.apple.com/ca/podcast/lets-talk-big-tingz/id1548373566">
            <FontAwesomeIcon
              icon={faPodcast}
              size="2x"
              className="footer-social-icons"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
