import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Movies() {
  const [query, setQuery] = useState("prison break");
  const [item, setItem] = useState([]);
  const options = {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/title/find",
    params: { q: `${query}` },
    headers: {
      "X-RapidAPI-Key": "55904ea740msheb8e63c7e6c8ba0p11a9d5jsn06306b4199a4",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options)
    .then((response) => {
      setItem(response.data);
       console.log(response.data);
    })

    .catch((err) => {
      console.log(err);
    });
  },[query])
  return (
    <div>
      <h1>{item.query}</h1>
    </div>
  );
}
