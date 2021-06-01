import React from "react";

const Movies = (props) => {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="card">
            <h4>{movie.Title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
