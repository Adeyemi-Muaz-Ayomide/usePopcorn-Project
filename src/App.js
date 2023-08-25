import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/MoviesList/Main";
import NumResults from "./components/Navbar/NumResults";
import MoviesList from "./components/Main/MoviesList/MoviesList";
import Loading from "./components/UI/Loading";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const KEY = "b0ea5caa";
const QUERY = "interstellar";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMoviesData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${QUERY}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    };

    getMoviesData();
  }, []);

  return (
    <>
      <Navbar>
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        {isLoading ? <Loading /> : <MoviesList movies={movies} />}
      </Main>
    </>
  );
}
