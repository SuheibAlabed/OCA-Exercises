import React, { useState } from "react";
import "../Style/App.css";
import RecipeDetails from "./RecipeDetails";
const FoodRec = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe bounceIn">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Recipe</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default FoodRec;
