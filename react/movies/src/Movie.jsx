import React from "react";
import Movies from './MovieData.json'
import MovieCard from './MovieCard';

function Movie(){
    return (
        <>
        <div className="movie-container">
        {Movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
        </>
    );
}

export default Movie;