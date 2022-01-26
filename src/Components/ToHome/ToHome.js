import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setPokemons, setTypes } from "../../Actions";
import Home from "../MyImages/Home.png";
import Reset from "../MyImages/ResetFilters.png";
import ash from "../MyImages/3770952.jpg";
import "./toHome.css";

const ToHome = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTypes());
  }, [dispatch]);

  return (
    <div className="containerToHome">
      <nav>
        <div className="homeButton" onClick={() => dispatch(setPokemons())}>
          <Link to="/home">
            <img className="home" src={Home} alt="Home" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ToHome;
