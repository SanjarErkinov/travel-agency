import React from "react";
import { Link } from "react-router-dom";
import "./Trips.css";

const TripsCard = ({ item }) => {
  const departDay = item.departureDate.match(/\d[^-]+$/);
  const arrivDay = item.arrivalDate.match(/\d[^-]+$/);
  let countDay = Number(arrivDay) - Number(departDay) + 1;
  let countNight = countDay - 1;

  return (
    <div className="card" style={{ backgroundImage: `url(${item.img1})` }}>
      <Link to={`/trip/${item.id}`}>
        <div className="cardBg">
          <div className="cardBg__first" context={item.description}>
            <h3>{item.title}</h3>
            <h5>
              Дней: {countDay > 0 ? countDay : 1} / Ночей:{" "}
              {countNight > 0 ? countNight : 0}
            </h5>
            <div className="afterContext" context={item.description}></div>
          </div>
          <span className="cardBg_span">{item.price} KGS</span>
        </div>
      </Link>
    </div>
  );
};

export default TripsCard;
