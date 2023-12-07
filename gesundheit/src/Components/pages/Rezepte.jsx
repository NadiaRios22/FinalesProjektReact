import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Rezepte.css";

// https://api.edamam.com/search?q=result&app_id=6ea51adf&app_key=17ab2678a8ccb114d96dec4e4b5c385e&to=15

function Rezepte() {
  const APP_ID = "6ea51adf";
  const APP_key = "17ab2678a8ccb114d96dec4e4b5c385e";
  const [rezept, setRezept] = useState("");
  const [results, setResults] = useState([]);
  const [diät, setDiät] = useState("");

  function getRezept() {
    Axios.get(
      `https://api.edamam.com/search?q=${rezept}&app_id=${APP_ID}&app_key=${APP_key}&healthLabels=${diät}&to=60`
    ).then((res) => {
      setResults(res.data.hits);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getRezept();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    getRezept();
  };

  return (
    <div className="Rezept">
      <h1>Such dein Rezept</h1>
      <form className="Form" onSubmit={onSubmit}>
        <div className="input-serch">
          <input
            className="input_form"
            type="text"
            placeholder="ich möchte kochen..."
            value={rezept}
            onChange={(e) => setRezept(e.target.value)}
          />
          <input className="input_form_search" type="submit" value="serch" />
        </div>
        {/* <div>
          <select
            className="diät"
            value={diät}
            onChange={(e) => setDiät(e.target.value)}
          >
            <option value="default">deine Diät</option>
            <option value="vegan">vegan</option>
            <option value="Lupine-Free">Lupine-Free</option>
            <option value="Sesame-Free">Sesame-Free</option>
            <option value="Mustard-Free">Mustard-Free</option>
            <option value="Celery-Free">Celery-Free</option>
            <option value="Crustacean-Free">Crustacean-Free</option>
            <option value="Red-Meat-Free">Red-Meat-Free</option>
            <option value="Pork-Free">Pork-Free</option>
            <option value="Alcohol-Free">Alcohol-Free</option>
            <option value="Fish-Free">Fish-Free</option>
            <option value="Egg-Free">Egg-Free</option>
            <option value="Wheat-Free">Wheat-Free</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Keto-Friendly">Keto-Friendly</option>
            <option value="Low Sugar">Low Sugar</option>
          </select>
        </div> */}
      </form>
      <div className="image-titel-rezept">
        <img src="/images/photo_2023-12-03_16-01-55.jpg" alt="" />
      </div>
      <div className="rezept_list">
        {results.map((result, index) => {
          return (
            <div
              className="result_rezepten"
              key={index}
              onClick={() => {
                window.open(result.recipe.url);
              }}
            >
              <img
                className="result_img"
                src={result.recipe.image}
                alt={result.recipe.label}
              />
              <p className="result_label">{result.recipe.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rezepte;
