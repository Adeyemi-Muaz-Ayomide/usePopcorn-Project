import Movie from "./Movie";
import Box from "../../UI/Box";

const MoviesList = ({ movies, onSelectMovie }) => {
  return (
    <Box>
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
        ))}
      </ul>
    </Box>
  );
};

export default MoviesList;
