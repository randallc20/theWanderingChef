import React, { useEffect, useState } from "react";
import SearchRecipes from "./SearchRecipes";
import FoodList from "./FoodList";

function Home() {
  const [foods, setFoods] = useState([]);


      const APP_key = '61764b76dc6ac804b499eb583ff38f67'
      const APP_ID = '96a63b8b'
      let searchQuery = "banana"
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`)
    .then(res => res.json())
    .then(data => setFoods(data.hits))
    .catch(err => console.error(err));
  },[])

  return (
    <div>
      <SearchRecipes />
      <FoodList foods={foods} />
    </div>
  );
}

export default Home;
