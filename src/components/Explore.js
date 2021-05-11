import { Link } from "react-router-dom";

function Explore({ handleSelectedPlanet }) {
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
    </div>
  );
}

export default Explore;
