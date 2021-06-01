import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Movies from "./Components/MoviesList/Movies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_MOVIE_KEY}`
      );
      const data = response.data.Search;
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="container">
      <Header />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
