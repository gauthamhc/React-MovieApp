import React from "react";
import "./MovieList.css";

const Movies = (props) => {
  const { movies } = props;
  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <div className="column">
              <div className="card" key={movie.id}>
                <div className="movie-card">
                  <div className="movie-title">
                    <p>{movie.Title}</p>
                  </div>
                  <div className="movie-image">
                    <img src={movie.Poster} alt="" />
                  </div>
                  <div className="movie-year">
                    <p>Year Released: {movie.Year}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Movies;
