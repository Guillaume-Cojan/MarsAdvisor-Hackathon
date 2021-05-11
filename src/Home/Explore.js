import { Link } from "react-router-dom";
import "./Explore.css";

function Explore({ handleSelectedPlanet }) {
  return (
    <div className="explore-container">
      <Link to="/planet">
        <button
          className="explore-btn"
          id={"Mars"}
          onClick={handleSelectedPlanet}
        >
          Explore Mars
        </button>
      </Link>
      <Link to="/planet">
        <button
          className="explore-btn"
          id={"Moon"}
          onClick={handleSelectedPlanet}
        >
          Explore the Moon
        </button>
      </Link>
      <Link to="/planet">
        <button
          className="explore-btn"
          id={"Galaxy"}
          onClick={handleSelectedPlanet}
        >
          {" "}
          Explore the Galaxy
        </button>
      </Link>
    </div>
  );
}

export default Explore;
