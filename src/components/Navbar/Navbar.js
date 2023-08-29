import Search from "./Search";
import NumResults from "./NumResults";
import Logo from "./Logo";

const Navbar = ({ query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
};

export default Navbar;
