import Navv from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Home.scss";

export default function Home(props) {
  return (
    <div>
      <div className="homepage-header-image">
        <Navv />
      </div>
      <div className="homepage-text-container">
        <h1 className="homepage-text-title">TITLE</h1>
        <p className="homepage-text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris n
        </p>
        <button type="button" className="homepage-button">
          Listen to our podcast!
        </button>
      </div>
      <Footer />
    </div>
  );
}
