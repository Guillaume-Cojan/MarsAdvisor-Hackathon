import Countdown from "./Countdown";
import Explore from "./Explore";
import Banner from "./Banner";
import { Switch, Route, Link } from "react-router-dom";

function Home({ handleSelectedPlanet }) {
  return (
    <div>
      <Explore />
      <Banner />
      {/* <Suggestions /> */}
      <Countdown />
    </div>
  );
}

export default Home;
