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
      "X-RapidAPI-Key":   process.env.X-RapidAPI-Key,
      "X-RapidAPI-Host": process.env.X-RapidAPI-Host,
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
            <input
              type="text"
              placeholder="search by movie"
              onChange={imput}
              class="input"
              required
            />
            <i></i>
          </div>
          <div class="form-button">
            <button type="submit" class="btnEnviar">
              OK
            </button>
          </div>
        </form>
      </div>

      <h1 className="title">
        found {items.length} movies by search query {query}
      </h1>
      <div className="flex-container">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.i.imageUrl} alt="image" />
              <h2>ID: {item.id}</h2>
              <h2>Name: {item.l}</h2>
              <h2>channel: {item.q}</h2>
              <h2>RANK: {item.rank}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
