import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }
  console.log(menu);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            MarsAdvisor
          </NavLink>

          <ul className={menu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/favorites"
                activeClassName="active"
                className="nav-links"
              >
                My Favorites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleMenu}>
            <img
              src={
                menu
                  ? "https://i.ibb.co/M8jL0Wv/Untitled-design-13.png"
                  : "https://i.ibb.co/c8Gb8Dk/Untitled-design-12.png"
              }
              className="menu"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
