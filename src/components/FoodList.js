import React from "react";
import FoodCard from "./FoodCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function FoodList({ foods, onCardChange, onStarClick, toggle }) {
  const foodInfo = foods.map((food) => {
    return (
      <FoodCard
        key={food.recipe.label}
        recipes={food.recipe}
        onCardChange={onCardChange}
        onStarClick={onStarClick}
        toggle={toggle}
      />
    );
  });
  return (
    // <div id="food-list">
    //   {foodInfo}
    // </div>
    <Container>
      <Row xs={1} md={2} className="g-4">
        {foodInfo}
      </Row>
    </Container>
  );
}

export default FoodList;
