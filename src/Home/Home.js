import Countdown from "./Countdown";
import Explore from "./Explore";
import Banner from "./Banner";
import SuggestionsList from "./SuggestionsList";

function Home({ handleSelectedPlanet }) {
  return (
    <div>
      <Explore handleSelectedPlanet={handleSelectedPlanet} />
      <Banner />
      <SuggestionsList />
      <Countdown />
    </div>
  );
}

export default Home;
