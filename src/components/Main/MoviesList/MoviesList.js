import { useState } from "react";
import Movies from "./Movie";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      <>
        {isOpen1 && (
          <ul className="list">
            {movies?.map((movie) => (
              <Movie movie={movie} key={movie.imdbID} />
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default MoviesList;
