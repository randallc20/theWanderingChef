import React from "react";
import FoodCard from "./FoodCard";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

function FoodList({ foods, onCardChange }) {
  //console.log(foods);
  const foodInfo = foods.map((food) => {
    return (
      <FoodCard
        key={food.recipe.label}
        // category={food.recipe.cuisineType}
        // image={food.recipe.image}
        // name={food.recipe.label}
        // ingredients={food.recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient.food.toLowerCase()}</li>)}
        recipes={food.recipe}
        nutrients={food.nutrients}
        onCardChange={onCardChange}
      />
    );
  });
  return (
  // <div id="food-list">
  //   {foodInfo}
  // </div>
  <Container>
      <Row xs={1} md={2} className='g-4'>
        {foodInfo}
      </Row>
    </Container>
  )
}

export default FoodList;
