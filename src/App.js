import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ImageList from "./components/ImageList";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import SuggestionDetails from "./components/SuggestionDetails"

library.add(fab, faCheckSquare);

function App() {
  const [images, setImages] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState("");

  function handleSelectedPlanet(key) {
    setSelectedPlanet(key.target.id);
  }

  const getData = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FluwJbwclx3iw8xluHvmGVHaMHi3c8oTYbOYkjDh&start_date=2021-02-10&end_date=2021-05-10"
    )
      .then((response) => response.json())
      .then((data) => setImages(data));
  };

  useEffect(getData, []);

  const [favorites, setFavorites] = useState([]);
  const handleFavorite = (newFav) => {
    setFavorites([...favorites], newFav);
  };

  console.log(images);
  console.log(favorites);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/">
          <Home handleSelectedPlanet={handleSelectedPlanet} />
        </Route>
        <Route path="/planet">
          <ImageList images={images} selectedPlanet={selectedPlanet} />
        </Route>
        {/* <Route
          path="/:date"
          render={(routeProps) => (
            <Image
              routeProps={routeProps}
              images={images}
              handleFavorite={handleFavorite}
            />
          )}
        /> */}
        <Route path="/favorites">
          <Favorites favoritesList={favorites} />
        </Route>
        <Route path="/suggestion/:id">
          <SuggestionDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
