import React from "react";
import FoodCard from "./FoodCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function FoodList({ foods, onCardChange, inFavs }) {
  const foodInfo = foods.map((food) => {
    return (
      <FoodCard
        key={food.recipe.label}
        recipes={food.recipe}
        onCardChange={onCardChange}
        inFavs={inFavs}
      />
    );
  });
  return (
    <Container id="card-container">
      <Row xs={1} md={2} className="g-4">
        {foodInfo}
      </Row>
    </Container>
  );
}

export default FoodList;
