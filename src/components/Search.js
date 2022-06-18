import React from "react";

function Search() {
  return (
    <div id="search-container">
      <div id="dropdown" className="filter">
        <label>Recipe Categories:</label>
        <select name="categories">
          <option>Lorem</option>
          <option>Ipsum</option>
          <option>Dolor</option>
        </select>
      </div>
      <div id="search" className="filter">
        <label htmlFor="search">Search Recipes: </label>
        <input type="text" placeholder="Type to search..." />
      </div>
    </div>
  );
}

export default Search;
