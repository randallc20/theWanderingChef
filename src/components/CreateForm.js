import React, { useState } from "react";
import "./CreateForm.css";

function CreateForm() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        description: description,
        name: name,
        image: image,
        ingredients: ingredients
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    setDescription("");
    setName("");
    setImage("");
    setIngredients("");
  }

  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1 id="form-header">Create Your Own Recipe</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Add recipe name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              type="text"
              id="description"
              name="description"
              placeholder="Add item description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-label">Ingredients</label>
            <input
              className="form-input"
              type="text"
              id="ingredients"
              name="ingredients"
              placeholder="Add ingredients..."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-label">Image</label>
            <input
              className="form-input"
              type="text"
              id="image"
              name="image"
              placeholder="Add item image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button id="form-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;