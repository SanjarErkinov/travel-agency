import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { tripsContext } from "../../contexts/TripsContext";
import "./Trips.css";

const TripsDetails = () => {
  const { tripsDetails, getTripsDetails, deleteTrip } =
    useContext(tripsContext);

  let params = useParams().id;

  useEffect(() => {
    getTripsDetails(params);
  }, []);

  return (
    <>
      <div className="container details">
        <h2>{tripsDetails.title}</h2>
        <h2>{tripsDetails.description}</h2>
        <h2>{tripsDetails.countPlace}</h2>
        <h2>{tripsDetails.date}</h2>
        <h2>{tripsDetails.price}</h2>
      </div>

      <Link to={`/tripUpdate/${params}`}>
        <button>Редактировать</button>
      </Link>

      <Link to="/">
        <button onClick={() => deleteTrip(params)}>Удалить</button>
      </Link>
    </>
  );
};

export default TripsDetails;
