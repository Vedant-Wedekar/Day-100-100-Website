import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "./moviesData";

export default function Player() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-white">Movie not found</p>;

  return (
    <div className="p-10 text-white">
      {/* Video player */}
      <video src={movie.video} controls autoPlay className="w-full rounded-lg" />

      {/* Movie details */}
      <h1 className="text-4xl font-bold mt-6">{movie.title}</h1>
      <p className="mt-3">{movie.description}</p>
      <h3 className="mt-4 font-semibold">Cast:</h3>
      <ul className="list-disc ml-6">
        {movie.cast.map((actor, i) => (
          <li key={i}>{actor}</li>
        ))}
      </ul>
    </div>
  );
}
