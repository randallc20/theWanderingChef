import React, {useState, useEffect} from 'react'
import RecipeOfTheDayCard from './RecipeOfTheDayCard';

function RecipeOfTheDay() {
    const APP_key = '61764b76dc6ac804b499eb583ff38f67'
    const APP_ID = '96a63b8b'
    const [foods, setFoods] = useState([]);

    let today = new Date();
    let dayOfWeek = today.getDay()
    let query = ""
    let title= ""

    if(dayOfWeek===0){
        query="soul"
        title="Soul Food Sunday Presents..."
    }
    else if(dayOfWeek===1){
        query="meatless"
        title="Meatless Monday Presents..."
    }
    else if(dayOfWeek===2){
        query="taco"
        title="Taco Tuesday Presents..."
    }
    else if(dayOfWeek===3){
        query="waffle"
        title="Waffle Wednesday Presents..."
    }
    else if(dayOfWeek===4){
        query="cocktail"
        title="Thirsty Thursday Presents..."
    }
    else if(dayOfWeek===5){
        query="fish"
        title="Fishy Friday Presents..."
    }
    else if(dayOfWeek===6){
        query="sandwich"
        title="Sandwich Saturday Presents..."
    }

    useEffect(() => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=52`)
        .then(res => res.json())
        .then(data => setFoods(data.hits))
        .catch(err => console.error(err));
      },[])

      const todaysFood = foods.map((food) => {
        return (
          <RecipeOfTheDayCard
            key={food.recipe.label}
            recipes={food.recipe}
          />
        );
      });

      function getRandom(arr){
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item
      }

      const randomRecipe = getRandom(todaysFood)

  return (
    <div id="RoD-card">
      <h1 id="RoD-title">{title}</h1>
        {randomRecipe}
    </div>
  )
}

export default RecipeOfTheDay