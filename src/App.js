import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ImageList from "./components/ImageList";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";

function App() {
  const [images, setImages] = useState([]);

  const getData = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FluwJbwclx3iw8xluHvmGVHaMHi3c8oTYbOYkjDh"
    )
      .then((response) => response.json())
      .then((data) => setImages(data));
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/planet">
          <ImageList images={images} />
        </Route>
        <Route path="/:id">
          <Image />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
