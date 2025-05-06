import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card gap-20 border-1 rounded-xl m-15 bg-gray-600 shadow-lg shadow-gray-900/100 text-white-500 flex">

    <div className="flex-1 p-5">
    <div className="flex gap-3">

    <div className="w-40 h-55 box-border size-32 bg-cover object-fit object-position">
      <img className="h-full w-full" src={movie.image} alt={movie.name} />
    </div>

    <div className="">
      <h2 className="text-white text-2xl">{movie.name}</h2>
      <br></br>
      <p className="text-white"><strong></strong> {movie.releaseYear}, {movie.dir}</p>
      <br></br>

      <div className="flex gap-5 relative top-1">
      <p className="text-white rounded-sm border-1 p-1 w-18"><strong></strong> {movie.duration} min </p>
      <p className="text-white relative top-1"><strong></strong> {movie.genre}</p>
      </div>

      </div>
    </div>

        <br></br>

      <p className="text-white">{movie.description}</p>

        <br></br>

      <div className="flex m-2 p-3 gap-5">
      <FaShareAlt /> <FaHeart /> <FaCommentAlt />
      </div>
      </div>

      <div className="flex-1 w-full h-110 mask-l-from-50% mask-l-to-90%">
          <img className="h-full w-full rounded-r-lg" src={movie.bg} alt={movie.name} />
      </div>

    </div>
  );
};

export default MovieCard;