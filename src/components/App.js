import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import MyRecipes from "./MyRecipes"
import Favorites from "./Favorites";
import CreateForm from "./CreateForm";
import { Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [favorites, setFavorites] = useState([])


      const APP_key = '61764b76dc6ac804b499eb583ff38f67'
      const APP_ID = '96a63b8b'
      let searchQuery = "banana"
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`)
    .then(res => res.json())
    .then(data => setFoods(data.hits))
    .catch(err => console.error(err));
  },[])

  function handleCardChange(recipeToAdd){
    const addToFavs = favorites.find(recipe => recipe.id === recipeToAdd.id)
    if(!addToFavs){
      setFavorites([...favorites, recipeToAdd])
    }
  }
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home foods={foods} onCardChange={handleCardChange}/>
        </Route>
        <Route path="/favorites">
            <Favorites favorites={favorites} />
        </Route>
        <Route path="/create">
            <CreateForm />
        </Route>
        <Route path="/myrecipes">
            <MyRecipes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;