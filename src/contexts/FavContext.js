import React, { createContext, useReducer, useState } from "react";

export const favContext = createContext();

const INIT_STATE = {
  favorite: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
};

const FavouriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [color, setColor] = useState({ backgroundColor: "#00b83b" });

  function checkTripInFav(id) {
    let fav = JSON.parse(localStorage.getItem("favorite"));
    if (!fav) {
      fav = {
        trips: [],
      };
    }
    let newfav = fav.trips.filter((elem) => elem.item.id === id);
    return newfav.length > 0
      ? setColor({ backgroundColor: "#00b83b" })
      : setColor({ backgroundColor: "red" });
  }

  function addToFavorite(trip, tripId) {
    checkTripInFav(tripId);
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        trips: [],
      };
    }
    let newTrip = {
      item: trip,
    };

    let filteredFavorite = favorite.trips.filter(
      (elem) => elem.item.id === trip.id
    );
    if (filteredFavorite.length > 0) {
      favorite.trips = favorite.trips.filter(
        (elem) => elem.item.id !== trip.id
      );
    } else {
      favorite.trips.push(newTrip);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }

  function getFav() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        trips: [],
      };
    }
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }
  return (
    <favContext.Provider
      value={{
        favorite: state.favorite,
        getFav,
        addToFavorite,
        color,
        setColor,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavouriteContextProvider;
