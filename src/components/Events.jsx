import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Events.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Events() {
  return (
    <div>
      <div className="events-header-image">
        <Nav />
      </div>
      <div className="events-container">
        <h1 className="events-title">UPCOMING LIVE SHOWS</h1>
        <h1 className="events-title2">UPCOMING EVENTS</h1>
      </div>
      <Footer />
    </div>
  );
}
