import React from "react";
import SearchRecipes from "./SearchRecipes";
import FoodList from "./FoodList";

function Home({foods,onCardChange}) {

  return (
    <div>
      <SearchRecipes />
      <FoodList foods={foods} onCardChange={onCardChange} />
    </div>
  );
}

export default Home;
