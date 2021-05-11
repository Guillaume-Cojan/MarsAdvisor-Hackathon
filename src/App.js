import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ImageList from "./components/ImageList";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);

function App() {
    const [images, setImages] = useState([]);

    const getData = () => {
        fetch(
            "https://api.nasa.gov/planetary/apod?api_key=FluwJbwclx3iw8xluHvmGVHaMHi3c8oTYbOYkjDh&start_date=2021-02-10&end_date=2021-05-10"
        )
            .then((response) => response.json())
            .then((data) => setImages(data));
    };

    useEffect(getData, []);

    console.log(images);
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/planet">
                    <ImageList images={images} />
                </Route>
                <Route
                    path="/:date"
                    render={(routeProps) => (
                        <Image routeProps={routeProps} images={images} />
                    )}
                />
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
