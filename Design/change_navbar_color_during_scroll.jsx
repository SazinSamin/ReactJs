import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./navbar.module.css";
import { useEffect } from "react";

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={!isScrolled ? style.Navbar : style.NavbarScrolled}>
    </div>
  );
};

export default NavBar;
