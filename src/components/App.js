import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeOfTheDay from "./RecipeOfTheDay";
import MyRecipes from "./MyRecipes";
import Favorites from "./Favorites";
import CreateForm from "./CreateForm";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [foods, setFoods] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("soup");

  const APP_key = "61764b76dc6ac804b499eb583ff38f67";
  const APP_ID = "96a63b8b";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data.hits))
      .catch((err) => console.error(err));
  }, [query]);

  function handleCardChange(e, recipeToAdd) {
    if (e.target.textContent === "★ Favorite") {
      fetch(`http://localhost:3001/favorites`, {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(recipeToAdd),
      })
        .then((res) => res.json())
        .then((data) => {
          let updatedFavorites = favorites;
          updatedFavorites.push(data);
          setFavorites(updatedFavorites);
        });
      alert(`Added ${recipeToAdd.label} to Favorites`);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/favorites`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  function handleRemove(e, recipeToRemove) {
    if (e.target.textContent === "★ Favorite") {
      fetch(`http://localhost:3001/favorites/` + recipeToRemove.id, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() =>  setFavorites(favorites.filter((favorite) => favorite.label !== recipeToRemove.label)))
      alert(`Removed ${recipeToRemove.label} from Favorites`);
    }
  }

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home
            foods={foods}
            onCardChange={handleCardChange}
            setQuery={setQuery}
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            favorites={favorites}
            handleRemove={handleRemove}
          />
        </Route>
        <Route path="/create">
          <CreateForm />
        </Route>
        <Route path="/myrecipes">
          <MyRecipes />
        </Route>
        <Route path="/recipeoftheday">
          <RecipeOfTheDay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
