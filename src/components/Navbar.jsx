import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img
              src={"./vegan-plan-logo.png"}
              width={130}
              alt="Vegan Plan logo"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/recept"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                recepies
              </NavLink>
            </li>
         
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/registrate"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                registrate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/mina-sidor"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <button className="btn-myPage">
               Mina sidor
              </button>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
