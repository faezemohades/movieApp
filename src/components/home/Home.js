import React, { useEffect } from "react";
import "./Home.scss";
import {APIKey} from '../common/apis/MovieApiKey'
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../common/apis/movieApi";
function Home() {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("err:", err);
        });
        console.log('The response from API',response)
    };
    fetchMovies();
  },[]);
  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
