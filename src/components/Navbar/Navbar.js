import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
};

export default Navbar;
