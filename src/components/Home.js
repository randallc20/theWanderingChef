import React from "react";
import SearchRecipes from "./SearchRecipes";
import FoodList from "./FoodList";

function Home({ foods, onCardChange, onStarClick, toggle }) {
  return (
    <div>
      <SearchRecipes />
      <FoodList
        foods={foods}
        onCardChange={onCardChange}
        onStarClick={onStarClick}
        toggle={toggle}
      />
    </div>
  );
}

export default Home;
