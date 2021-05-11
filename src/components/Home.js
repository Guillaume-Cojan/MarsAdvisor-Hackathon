import Countdown from "./Countdown";
import { Switch, Route, Link } from "react-router-dom";

function Home({ handleSelectedPlanet }) {
  return (
    <div>
      <Link to="/planet">
        <button id={"Mars"} onClick={handleSelectedPlanet}>
          Explore Mars
        </button>
      </Link>
      <Link to="/planet">
        <button id={"Moon"} onClick={handleSelectedPlanet}>
          Explore the Moon
        </button>
      </Link>
      <Link to="/planet">
        <button id={"Galaxy"} onClick={handleSelectedPlanet}>
          {" "}
          Explore the Galaxy
        </button>
      </Link>
      <Countdown />
    </div>
  );
}

export default Home;
