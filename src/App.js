import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Movies from "./Components/MoviesList/Movies";
import Error from "./Components/Header/Error";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState();

  // const searchHandler = (e) => {
  //   setSearchValue(e);
  // };

  const fetchMovies = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_MOVIE_KEY}`
      );
      const data = response.data.Search;
      console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      fetchMovies();
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [searchValue]);

  if (loading) {
    return (
      <div className="container">
        <Error />
      </div>
    );
  }
  // if (error || !Array.isArray(movies)) {
  //   return <h4>There was an error loading your data!...</h4>;
  // }
  return (
    <div className="container">
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="movie-container">
        <Movies movies={movies} />
      </div>
    </div>
  );
};

export default App;
