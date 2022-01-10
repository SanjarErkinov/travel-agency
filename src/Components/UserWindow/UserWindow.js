import React, { useContext } from "react";
import { favContext } from "../../contexts/FavContext";
import Favourites from "../Favourites/Favourites";
import "./UserWindow.css";

const UserWindow = () => {
  const { favorite } = useContext(favContext);
  return (
    <div className="container userWindow">
      <h1>Избранное</h1>
      <Favourites />
    </div>
  );
};

export default UserWindow;
