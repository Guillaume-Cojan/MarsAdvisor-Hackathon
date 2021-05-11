import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:planet" >
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
