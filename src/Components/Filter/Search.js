import React, { useContext, useState } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import TripsCard from "../Trips/TripsCard";
import { IoSearchCircleSharp } from "react-icons/io5";
import "./Filter.css";

const Search = () => {
  const { searchTrips, getSearch } = useContext(tripsContext);
  const [searchValue, setSearchValue] = useState("");

  function handleValue() {
    getSearch(searchValue);
    setSearchValue("");
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "110px",
          backgroundColor: "rgb(6, 141, 204)",
          margin: "150px 0 10px 0",
        }}
      >
        <div className="container searchContainer">
          <input
            className="searchWindow"
            placeholder="Введите ключевое слово..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoSearchCircleSharp
            className="searchIconBtn"
            onClick={handleValue}
          />
        </div>
      </div>
      <div className="container">
        <h2
          style={{
            margin: 20,
            fontSize: "2.2rem",
            color: "rgb(141, 136, 136)",
          }}
        >
          Найдено ответов:
        </h2>
        {searchTrips.length ? (
          <div className="list">
            {searchTrips.map((item) => (
              <TripsCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <h3 style={{ fontWeight: "500", margin: 30 }}>
            К сожалению, по Вашему запросу ничего не найдено. Напишите нам в
            чат, мы всегда онлайн и всегда Вам поможем.
          </h3>
        )}
      </div>
    </>
  );
};

export default Search;
