import React, { useEffect } from "react";
import "./Home.scss";
import {APIKey} from '../common/apis/MovieApiKey'
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
function Home() {
  const movieText = "Harry";
  const dispatch=useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("err:", err);
        });
       dispatch(addMovies(response.data))
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
