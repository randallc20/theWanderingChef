import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RecipeOfTheDayCard({recipes}) {
  return (
    <Card
    id="RoD"
    style={{ width: "18rem" }}
  >
    <Card.Img variant="top" src={recipes.image} />
    <Card.Body>
      <Card.Title>
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
    </Card.Body>
  </Card>
  )
}

export default RecipeOfTheDayCard