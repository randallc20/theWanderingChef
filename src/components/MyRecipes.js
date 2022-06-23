import React, {useState, useEffect} from 'react'
import MyRecipeCard from './MyRecipeCard';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

function MyRecipes() {
  const[myRecipies, setMyRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(data => setMyRecipes(data))
  },[])

  function handleDeleteItem(deletedItem) {
    setMyRecipes(myRecipies.filter(recipe => recipe.id !== deletedItem.id))
  }

  const deck = myRecipies.map((recipe) => (
    <MyRecipeCard 
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
      ingredients={recipe.ingredients}
      onDeleteItem={handleDeleteItem}
    />
  ))

  return (
    <Container>
      <Row xs={1} md={2} className='g-4'>
        {deck}
      </Row>
    </Container>
  )
}

export default MyRecipes