import { Link, NavLink } from "react-router-dom";
import style from "../css/navbar.module.css";

// Routing
const Navbar = () => {
  return <nav>
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
    <NavLink to="/about" className="nav-link">About</NavLink>
    <NavLink to="/user/:userName" className="nav-link">User</NavLink>
    <NavLink to="items" className="nav-link">Items</NavLink>
  </nav>
}

export default Navbar;