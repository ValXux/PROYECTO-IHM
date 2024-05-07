import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className="navbar navbar-dark bg-dark">
          <div className="container d-flex justify-content-center">
              <Link to="/" className="navbar-brand">ChaskiCode</Link>
          </div>
      </header>
  );
}

export default Header;