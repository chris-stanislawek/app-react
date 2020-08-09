import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import GifContainer from "./GifContainer";

import axios from "axios";

const MainContainer = () => {
  const [gifs, setGifs] = useState([]);
  let [loading, setLoading] = useState(false);
  console.log(loading);
  console.log(setLoading);

  const getGif = (searchQuery) => {
    setLoading(true);
    console.log(loading);

    if (!searchQuery) {
      searchQuery = "demo";
    }

    const API = `https://api.giphy.com/v1/gifs/search?api_key=VGHTkMNyiXILVivqLuLA7SZTQgR35M71&q=${searchQuery}`;
    axios
      .get(API)
      .then((response) => setGifs(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGif();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Search getGif={getGif} />
        {loading ? <GifContainer gifs={gifs} /> : <Spinner />}
      </div>
    </div>
  );
};

export default MainContainer;
