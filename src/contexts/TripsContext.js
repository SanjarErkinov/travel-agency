import React, { createContext, useReducer } from "react";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const tripsContext = createContext();

const INIT_STATE = {
  trips: [],
  tripsDetails: {},
  regions: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return { ...state, trips: action.payload };
    case "GET_TRIPS_DETAILS":
      return { ...state, tripsDetails: action.payload };
    case "GET_REGIONS":
      return { ...state, regions: action.payload };
    default:
      return state;
  }
};

const TripsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const tripsCollectionRef = collection(db, "trips");

  // Render //
  const getTrips = async () => {
    const data = await getDocs(tripsCollectionRef);
    const tripsArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: "GET_TRIPS",
      payload: tripsArr,
    });
  };

  // Details //

  const getTripsDetails = async (id) => {
    const data = await getDocs(tripsCollectionRef);
    let tripDetails = {};
    data.docs.forEach((doc) =>
      doc.id === id ? (tripDetails = doc.data()) : null
    );
    dispatch({
      type: "GET_TRIPS_DETAILS",
      payload: tripDetails,
    });
  };

  // Filter Region //
  const getRegion = async (reg) => {
    try {
      const data = await getDocs(tripsCollectionRef);
      const tripsArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const regionsArr = tripsArr.filter((elem) => elem.title === reg);
      dispatch({
        type: "GET_REGIONS",
        payload: regionsArr,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // CRUD //

  const addTrip = async (newTrip) => {
    await addDoc(tripsCollectionRef, newTrip);
    getTrips();
  };

  const updateTripFunc = async (id, updatedTrip) => {
    const tripDoc = doc(db, "trips", id);
    await updateDoc(tripDoc, updatedTrip);
    getTrips();
  };

  const deleteTrip = async (id) => {
    const tripDoc = doc(db, "trips", id);
    await deleteDoc(tripDoc);
    getTrips();
  };

  return (
    <tripsContext.Provider
      value={{
        trips: state.trips,
        getTrips,
        addTrip,
        updateTripFunc,
        deleteTrip,
        getTripsDetails,
        tripsDetails: state.tripsDetails,
        getRegion,
        regions: state.regions,
      }}
    >
      {children}
    </tripsContext.Provider>
  );
};

export default TripsContextProvider;
