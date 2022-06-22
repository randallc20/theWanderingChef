import React from "react";
import FoodCard from "./FoodCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Favorites({ favorites }) {
  const favInfo = favorites.map((favorite) => {
    return <FoodCard key={favorite.label + "favorites"} recipes={favorite} />;
  });
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {favInfo}
      </Row>
    </Container>
    // <h1>Hi</h1>
  );
}

export default Favorites;
