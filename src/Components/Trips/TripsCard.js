import React from "react";
import { Link } from "react-router-dom";
import "./Trips.css";

const TripsCard = ({ item }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${item.img})` }}>
      <div className="cardBg">
        <h3>
          Локация: <em>{item.title}</em>
        </h3>
        <h3>
          Описание: <em>{item.description}</em>
        </h3>
        <h3>
          Количество мест: <em>{item.countPlace}</em>
        </h3>
        <h3>
          Дата: <em>{item.date}</em>
        </h3>
        <h3>
          Цена: <em>{item.price}</em>
        </h3>
        <Link to={`/trip/${item.id}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};

export default TripsCard;
