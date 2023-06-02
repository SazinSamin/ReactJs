import { Link, NavLink } from "react-router-dom";
import style from "../css/navbar.module.css";

// Routing
const Navbar = () => {
  return <nav>
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/service" className="nav-link">Service</NavLink>
    <NavLink to="/about" className="nav-link">About</NavLink>
  </nav>
}

export default Navbar;