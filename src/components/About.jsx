import Nav from "./Nav";
import "../styles/About.scss";
import { teamMember } from "../data";
import image from "../assets/1.png";

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
        <div className="about-who-img-div">
          <img src={image} alt="yhtyhyt" className="about-who-img" />
        </div>
      </div>
      <div className="about-team-container">
        {teamMember.map((person) => (
          <div className="about-team-card">
            <h3 className="about-team-name">{person.name}</h3>
            <img className="about-team-img" src={image} alt="person" />
            <p className="about-team-description">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
