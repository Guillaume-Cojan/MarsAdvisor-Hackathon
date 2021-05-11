import Countdown from "./Countdown";
import { Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/planet">
        <button>Explore Mars</button>
      </Link>
      <Link to ="/planet">
      <button>Explore the Moon</button>
      </Link>
      <Link to ="/planet">

      <button> Explore the Galaxy</button>
     

      </Link >
      <Countdown />
    </div>
  );
}

export default Home;
