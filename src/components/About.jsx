import Nav from "./Nav";
import "../styles/About.scss";

export default function About() {
  return (
    <div>
      <div className="about-header-image">
        <Nav />
      </div>
      <div className="about-who-container">
        <div className="about-who">
          <h1 className="about-who-title">WHO ARE WE?</h1>
          <p className="about-who-paragraph">
            Let's Talk Big Tingz is an organization that was initiated to create
            a safe space for young Black women to speak their truth, existence,
            struggles, challenges, and successes. What began as a small idea,
            LTBT has flourished into something bigger. Let's Talk Big Tingz
            first debuted as a podcast where they talked about topics like
            racism, Black women struggles, relationships, friendships,
            discrimination, islamophobia... hence the title "Let's Talk Big
            Tingz." These discussions turned into{" "}
          </p>
        </div>
        <div className="about-who-img">
          <img src="../assets/placeholder-image.png" alt="yhtyhyt" />
        </div>
      </div>
    </div>
  );
}
