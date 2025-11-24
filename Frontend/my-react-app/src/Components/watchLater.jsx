import React from "react";
import { useNavigate } from "react-router-dom";

export default function WatchLater({ watchLater }) {
  const navigate = useNavigate();

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Watch Later</h2>
      {watchLater.length === 0 ? (
        <p>No movies saved.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {watchLater.map((movie) => (
            <div
              key={movie.id}
              className="relative cursor-pointer"
              onClick={() => navigate(`/player/${movie.id}`)}
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full rounded-lg"
              />
              <h3 className="mt-2">{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
