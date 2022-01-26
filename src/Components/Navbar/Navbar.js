import React from "react";
import ToHome from "../ToHome/ToHome";
// import Create from "../Create/Create";
import "./navbar.css";
import { Link } from "react-router-dom";
import CreateYours from "../MyImages/create.png"
import "../Create/create.css";
//import pokepedia from "../MyImages/pokepedia.png"
import pokepedia from "../MyImages/HenryPokepedia.png";
import { useLocation } from "react-router-dom";
import Start from "../Start/Start";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="containerNavbarA">
      {location.pathname === "/" ? (
        <nav className="navbar">
          <div className="toHomeNav">
            <Start />
          </div>
          <div className="pokepediaNav">
            <img id="pokepedia" src={pokepedia} alt="Pokepedia" />
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="toHomeNav">
            <ToHome />
          </div>
          <div className="pokepediaNav">
            <img id="pokepedia" src={pokepedia} alt="Pokepedia" />
          </div>
          {location.pathname === "/home" && (
            <div className="createNav">
              <div className="containerCreate">
                <Link to="/create">
                  <img id="create" src={CreateYours} alt="Create your Pokémon"/>
                </Link>
              </div>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
