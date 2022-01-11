import "../styles/Nav.scss";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">LTBT</div>
      <div className="nav-items">
        <a href="/episodes">EPISODES</a>
        <a href="/episodes">EVENTS</a>
        <a href="/episodes">ABOUT US</a>
        <a href="/episodes">STORE</a>
        <a href="/episodes">CONTACT US</a>
      </div>
    </div>
  );
}
