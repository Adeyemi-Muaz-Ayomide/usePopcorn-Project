import MoviesList from "./MoviesList";
import Watched from "../WatchedMovies/Watched";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <MoviesList movies={movies} />
      <Watched />
    </main>
  );
};

export default Main;
