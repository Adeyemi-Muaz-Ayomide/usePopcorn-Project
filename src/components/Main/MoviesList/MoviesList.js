import Movie from "./Movie";
import Box from "../../UI/Box";

const MoviesList = ({ movies }) => {
  return (
    <Box>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </Box>
  );
};

export default MoviesList;
