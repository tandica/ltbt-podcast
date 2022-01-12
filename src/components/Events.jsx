import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Events.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { upcomingEvents, upcomingLiveShows } from "../data";

export default function Events() {
  return (
    <div>
      <div className="events-header-image">
        <Nav />
      </div>
      <div className="events-container">
        <h1 className="events-title">UPCOMING LIVE SHOWS</h1>
        <div className="events-cards">
          {upcomingLiveShows.map((show) => (
            <h2>{show.title}</h2>

            // <h4>{show.date}</h4>
          ))}
        </div>
        <h1 className="events-title2">UPCOMING EVENTS</h1>
      </div>
      <Footer />
    </div>
  );
}
