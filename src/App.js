import { useState } from "react";
import { useLocalStorageState } from "./components/useLocalStorageState";
import { useMovies } from "./components/useMovies";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/MoviesList/Main";
import MoviesList from "./components/Main/MoviesList/MoviesList";
import Loading from "./components/UI/Loading";
import Error from "./components/UI/Error";
import Box from "./components/UI/Box";
import Summary from "./components/Main/WatchedMovies/Summary";
import WatchedList from "./components/Main/WatchedMovies/WatchedLMoviesList";
import Watched from "./components/Main/WatchedMovies/Watched";

// const KEY = "b0ea5caa";
// const QUERY = "interstellar";
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleSelectMovie = (id) =>
    setSelectedId((selectedId) => (id === selectedId ? null : id));

  const handleCloseMovie = () => setSelectedId(null);

  const handleAddWatched = (movie) =>
    setWatched((watched) => [...watched, movie]);
    
  const handleDeleteWatched = (id) =>
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));

  return (
    <>
      <Navbar query={query} setQuery={setQuery} movies={movies} />
      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <Error message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <Watched
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
