import "../styles/Nav.scss";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="/">LTBT</a>
      </div>
      <div className="nav-items">
        <a href="/episodes">EPISODES</a>
        <a href="/events">EVENTS</a>
        <a href="/about">ABOUT US</a>
        <a href="/store">STORE</a>
        <a href="/contact">CONTACT US</a>
      </div>
    </div>
  );
}
