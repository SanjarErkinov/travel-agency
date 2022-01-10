import React, { useContext, useState } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import TripsCard from "../Trips/TripsCard";
import ReactPaginate from "react-paginate";
import "./Filter.css";
import Content from "../Content/Content";

const RegionList = () => {
  const { regions } = useContext(tripsContext);
  const [pageNumber, setPageNumber] = useState(0);

  const regionsPerPage = 6;
  const pagesVisited = pageNumber * regionsPerPage;

  const pageCount = Math.ceil(regions.length / regionsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayRegions = regions
    .slice(pagesVisited, pagesVisited + regionsPerPage)
    .map((item) => <TripsCard item={item} key={item.id} />);

  return (
    <div className="regions">
      <img
        src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"
        alt="mountain"
        style={{ width: "100%", height: "300px" }}
      />
      {displayRegions.length ? (
        <div className="container">
          <div className="list">{displayRegions}</div>
          {displayRegions.length > 6 ? (
            <ReactPaginate
              previousLabel={"Назад"}
              nextLabel={"Вперед"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          ) : null}
        </div>
      ) : (
        <div className="container">
          <h3 style={{ fontWeight: "500", margin: 30 }}>
            К сожалению, по Вашему запросу ничего не найдено. Напишите нам в
            чат, мы всегда онлайн и всегда Вам поможем.
          </h3>
        </div>
      )}
      <hr />
      <Content />
    </div>
  );
};
export default RegionList;
