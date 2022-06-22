import React, {useState} from "react";
import FoodList from "./FoodList";

function Home({foods, onCardChange, setQuery}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e){
    e.preventDefault()
    setQuery(search)
  }

  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-bar"
        type="text"
        id="search"
        placeholder="search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>

    <div>
      <FoodList foods={foods} onCardChange={onCardChange} />
    </div>
    </>
  );
}

export default Home;
