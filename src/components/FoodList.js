import React from "react";
import FoodCard from "./FoodCard";

function FoodList({ foods }) {
  console.log(foods);
  const foodInfo = foods.map((food) => {
    return (
      <FoodCard
        key={food.recipe.label}
        category={food.recipe.cuisineType}
        image={food.recipe.image}
        name={food.recipe.label}
        ingredients={food.recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient.food.toLowerCase()}</li>)}
        nutrients={food.nutrients}
      />
    );
  });
  return <div id="food-list">{foodInfo}</div>;
}

export default FoodList;
