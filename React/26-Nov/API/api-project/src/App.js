import React, { useState } from "react";
import "./Style/App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import FoodRec from "./component/FoodRec";
const App = () => {
  const [Food, setFood] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "23353349";
  const APP_KEY = "ac3a0b2f1177c2835413e58d82386258";
  const url = `https://api.edamam.com/search?q=${Food}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setFood("");
  };

  const onChange = (e) => {
    setFood(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="Container">
      <h1 className="Header glow">قرمز ونقي</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          onChange={onChange}
          value={Food}
        />
        <input type="submit" value="بحث" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <FoodRec key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};
export default App;
