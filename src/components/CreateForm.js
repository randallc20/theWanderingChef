import React, {useState} from 'react';
import './CreateForm.css'

function CreateForm() {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [season, setSeason] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/recipes', {
      method:'POST',
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({
        description: description,
        name: name,
        image: image,
        ingredients: ingredients,
        season: season,
        category: category,
      }),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    //setName("")
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Create Recipe</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className='form-label' >Name</label>
            <input
              className='form-input'
              type="text"
              id="name"
              name="name"
              placeholder='Add recipe name...'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label className='form-label' >Description</label>
            <input
              className='form-input'
              type="text"
              id="description"
              name="description"
              placeholder='Add item description...'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field">
            <label className='form-label' >Ingredients</label>
            <input
              className='form-input'
              type="text"
              id="ingredients"
              name="ingredients"
              placeholder='Add ingredients...'
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="field">
            <label className='form-label' >Image</label>
            <input
             className='form-input'
              type="text"
              id="image"
              name="image"
              placeholder='Add item image link'
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="field">
            <label className='form-label' >Season</label>
            <input
             className='form-input'
              type="text"
              id="season"
              name="season"
              placeholder='Add season'
              onChange={(e) => setSeason(e.target.value)}
            />
          </div>
          <div className="field">
            <label className='form-label' >Category</label>
            <input
             className='form-input'
              type="text"
              id="category"
              name="category"
              placeholder='Add category'
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button id="form-btn">Submit</button>
        </div>
      </form>
    </div>
    
  );
}

export default CreateForm;