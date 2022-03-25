import Navv from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Episodes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { highlightedEpisodes } from "../data.js";

export default function Episodes() {
  return (
    <div>
      <Helmet>
        <title>LTBT | Episodes</title>
      </Helmet>
      <div className="episodes-header-image">
        <Navv />
      </div>
      <div className="episodes-container">
        <h1 className="episodes-title">LISTEN TO OUR PODCAST</h1>
        <div className="episodes-links">
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
        <p className="episodes-paragraph">
          Our episodes reflect our identities and intersectionalities, as well
          as our individual experiences and stories. Each episode is guaranteed
          to make you laugh, and inform you on important topics.
        </p>
        <div className="highlighted-episodes-container">
          <h2 className="highlighted-episodes-heading">
            Some of our favourite episodes...
          </h2>
          {/* <div className="embedded">
            <iframe
              title="Why Gentrification??"
              src="https://open.spotify.com/embed/episode/1Lfa1v7gtjkt79kfxb6Wl6?utm_source=generator"
              width="45%"
              height="232"
              frameBorder="0"
              allowfullscreen=""
              className="embedded-ep"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              title="Representation Matters"
              src="https://open.spotify.com/embed/episode/143TtzWfx0mAYz6dpyXD8q?utm_source=generator"
              width="45%"
              height="232"
              frameBorder="0"
              className="embedded-ep"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              title="Are you really my friend"
              src="https://open.spotify.com/embed/episode/7HWDtoCLM7WIbohWSfJl7w?utm_source=generator"
              width="45%"
              height="232"
              frameBorder="0"
              className="embedded-ep"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              title="Yes...not even water"
              src="https://open.spotify.com/embed/episode/3zvszbuTatZ4pb5XzXQ7dA?utm_source=generator"
              width="45%"
              height="232"
              frameBorder="0"
              allowfullscreen=""
              className="embedded-ep"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div> */}
          <div className="highlighted-episodes">
            {highlightedEpisodes.map((episode) => (
              <div className="highlighted-episodes-card">
                <a href={episode.link}>
                  <h3 className="highlighted-episodes-title">{episode.name}</h3>
                </a>
                <br></br>
                <h4 className="highlighted-episodes-description">
                  {episode.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
