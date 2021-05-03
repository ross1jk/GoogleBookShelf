import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/Saved"]}>
            <Saved />
          </Route>
          <Route>
            <Search />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;