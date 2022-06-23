import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function FoodCard({ recipes, onCardChange, onStarClick }) {
  return (
    <Card
      id="card"
      style={{ width: "18rem" }}
      onClick={(e) => onCardChange(e, recipes)}
    >
      <Card.Img variant="top" src={recipes.image} />
      <Card.Body>
        <Card.Title onClick={() => onStarClick()}>
          <strong id="food-name">{recipes.label}</strong>
        </Card.Title>
        <Card.Text id="card-text">
          {recipes.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.food.toLowerCase()}</li>
          ))}
        </Card.Text>
        <Button variant="primary" id="card-btn" href={recipes.url}>
          Recipe
        </Button>
        <Button variant="primary" id="card-btn">
          ★ Favorite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
