import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Favorites from "./Favorites";
import CreateForm from "./CreateForm";
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path="/favorites">
            <Favorites />
        </Route>
        <Route path="/create">
            <CreateForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;