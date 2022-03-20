import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/About.scss";
import { teamMember } from "../data";
import image from "../images/1.png";

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
        <h1 className="about-team-title">MEET THE TEAM</h1>
        <div className="about-team-container-card">
          {teamMember.map((person) => (
            <div className="about-team-card" key={person.name}>
              <h3 className="about-team-name">{person.name}</h3>
              <img className="about-team-img" src={person.photo} alt="person" />
              <p className="about-team-description">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-mission-container">
        <div className="about-mission-titles">
          <h1 className="about-mission">Mission</h1>
          <h1 className="about-mission">Values</h1>
          <h1 className="about-mission">Values</h1>
        </div>
        <div className="about-mission-paragraph">
          <p className="about-mission-text">
            Create platforms where young Black creatives are noticed,
            appreciated, and succeed
          </p>
          <p className="about-mission-text">
            A synergetic, Black women led organization that allows a safe space
            for conversation, realization, and support for, to, and by Black
            women
          </p>
          <p className="about-mission-text">
            Collaboration, success, community, and leadership that will provide
            positive outcomes for young Black women and girls
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
