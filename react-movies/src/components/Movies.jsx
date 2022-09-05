import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movie.css";
export default function Movies() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: `${query}` },
    headers: {
      "X-RapidAPI-Key": "c02a467fe7msh0c85f69b55746f4p1e11e9jsnd757a87b4be1",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const formEvent = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then((response) => {
        setItems(response.data.d);

        console.log(items);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const imput = (e) => setQuery(e.target.value);
  return (
    <div>
    
    <div class="newsletter">
  <form action="" onSubmit={formEvent}>
    <div class="form-input">
      <input  type="text" placeholder="enter here" onChange={imput} class="input"  required />
      <i></i>
    </div>
    <div class="form-button">
      <button type="submit" class="btnEnviar">OK</button>
    </div>
  </form>
</div>  


       
        <h1 className="title">
        found {items.length} movies by search query {query}
      </h1>

        {items.map((item) => {
        return (
          <div key={item.id} className="parent">
            <img src={item.i.imageUrl} alt="image" />
            <h2>name: {item.id}</h2>
            <h2>country: {item.l}</h2>
            <h2>country: {item.q}</h2>
            <h2>rank: {item.rank}</h2>
          </div>
        );
      })}
    </div>
  );
}
