import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Events.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { upcomingEvents, upcomingLiveShows } from "../data/data";

export default function Events() {
  return (
    <div>
      <div className="events-header-image">
        <Nav />
      </div>
      <div className="events-container">
        <h1 className="events-title">UPCOMING LIVE SHOWS</h1>
        <div className="events-liveshow-container">
          {upcomingLiveShows.map((show) => (
            <div className="events-liveshow-card">
              <h3 className="events-liveshow-title">{show.title}</h3>
              <h4 className="events-liveshow-date">{show.date}</h4>
              <h4 className="events-liveshow-location">{show.location}</h4>
            </div>
          ))}
        </div>
        <h1 className="events-title2">UPCOMING EVENTS</h1>
        <div className="upcoming-event-container">
          {upcomingEvents.map((show) => (
            <div className="upcoming-event-card">
              <h3 className="upcoming-event-title">{show.title}</h3>
              <h4 className="upcoming-event-date">{show.date}</h4>
              <h4 className="upcoming-event-info">{show.info}</h4>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
