import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Movies() {
  const [query, setQuery] = useState("Elite");
  const [item, setItem] = useState([]);

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: `${query}` },
    headers: {
      "X-RapidAPI-Key": "c02a467fe7msh0c85f69b55746f4p1e11e9jsnd757a87b4be1",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [query]);
  return (
    <div>
      <h1>idd : {item.v}</h1>
      <h1>Name : {item.q}</h1>
    </div>
  );
}
