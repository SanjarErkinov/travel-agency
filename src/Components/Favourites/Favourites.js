import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import { favContext } from "../../contexts/FavContext";
import TripsCard from "../Trips/TripsCard";
import "./Favourites.css";

const Favourites = () => {
  const { getFav, favorite, setColor } = useContext(favContext);

  useEffect(() => {
    getFav();
  }, []);

  function deleteFavTrip(id) {
    let fav = JSON.parse(localStorage.getItem("favorite"));
    let filteredFav = {
      ...fav,
      trips: fav.trips.filter((e) => e.item.id != id),
    };
    localStorage.setItem("favorite", JSON.stringify(filteredFav));
    setColor({ backgroundColor: "#00b83b" });
    getFav();
  }
  return (
    <div className="container">
      {favorite.trips ? (
        <div className="favourite">
          {favorite.trips.map((elem, index) => (
            <div key={index}>
              <button
                className="btnDelFav"
                onClick={() => deleteFavTrip(elem.item.id)}
              >
                X
              </button>
              <TripsCard item={elem.item} key={index} />
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Favourites;
