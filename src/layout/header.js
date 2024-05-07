import { Link } from "react-router-dom";

const Header = () => {
    return <header className="d-flex navbar fixed cabezera">
    <div className="container-fluid justify-content-center">
      <a className="navbar-brand text-light" to="/">ChaskiCode.</a>
    </div>
  </header>
}

export default Header;