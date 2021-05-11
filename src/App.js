import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const getData = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((data) => setImages(images.data));
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:planet">
          <ImageList />
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
