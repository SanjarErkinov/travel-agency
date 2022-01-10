import React, { createContext, useReducer } from "react";
import fire from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { getDatabase, ref, get, child } from "firebase/database";

export const tripsContext = createContext();

const INIT_STATE = {
  trips: [],
  tripsDetails: {},
  regions: [],
  searchTrips: [],
  messageObj: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return { ...state, trips: action.payload };
    case "GET_TRIPS_DETAILS":
      return { ...state, tripsDetails: action.payload };
    case "GET_REGIONS":
      return { ...state, regions: action.payload };
    case "GET_SEARCH_TRIPS":
      return { ...state, searchTrips: action.payload };
    case "GET_REALTIME_CHAT":
      return { ...state, messageObj: action.payload };
    default:
      return state;
  }
};
const dbReal = getDatabase(fire);
const dbRef = ref(dbReal);

const TripsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const db = getFirestore(fire);

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
      const regionsArr = tripsArr.filter((elem) => elem.regName === reg);
      dispatch({
        type: "GET_REGIONS",
        payload: regionsArr,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Search //
  const getSearch = async (val) => {
    if (val.length > 0) {
      let searchVal = val.toLowerCase();
      const data = await getDocs(tripsCollectionRef);
      const trips = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter(
          (item) =>
            item.regName
              .toLowerCase()
              .slice(0, searchVal.length)
              .indexOf(searchVal) !== -1
        );
      dispatch({ type: "GET_SEARCH_TRIPS", payload: trips });
      val = "";
    } else {
      const trips = [];
      dispatch({ type: "GET_SEARCH_TRIPS", payload: trips });
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

  // Realtime Chat

  function readMessage() {
    get(child(dbRef, `chat/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const messages = [];
          Object.keys(snapshot.val()).map((item) =>
            messages.push(snapshot.val()[item])
          );
          dispatch({ type: "GET_REALTIME_CHAT", payload: messages });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //  Comments //
  const addComments = async (id, newComment) => {
    const tripDoc = doc(db, "trips", id);
    await updateDoc(tripDoc, newComment);
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
        getSearch,
        searchTrips: state.searchTrips,
        readMessage,
        messagesObj: state.messageObj,
        addComments,
      }}
    >
      {children}
    </tripsContext.Provider>
  );
};

export default TripsContextProvider;
