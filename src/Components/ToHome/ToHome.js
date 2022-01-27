import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPokemons, setTypes } from "../../Actions";
import Home from "../MyImages/Home.png";
import "./toHome.css";

const ToHome = () => {
  const dispatch = useDispatch();

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
