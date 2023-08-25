import Watched from "../WatchedMovies/Watched";
const Main = ({ children }) => {
  return (
    <main className="main">
      {children}
      <Watched />
    </main>
  );
};

export default Main;
