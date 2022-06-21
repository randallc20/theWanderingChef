import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function FoodCard({ image, name, ingredients }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{ingredients}</Card.Text>
        <Button variant="primary">Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
