import React from "react";

function CreateForm() {
  return (
    <div>
      <form id="new-recipe-form">
        <input type="text" name="name" placeholder="Recipe Name" />
        <input type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Recipe</button>
      </form>
        <textarea type="text" name="Instructions" form="new-recipe-form" placeholder="Enter instructions:"></textarea>
    </div>
  );
}

export default CreateForm;
