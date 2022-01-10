import React, { useContext, useEffect, useState } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import TripsCard from "./TripsCard";
import "./Trips.css";
import ReactPaginate from "react-paginate";

const TripsList = () => {
  const { trips, getTrips, getRegion } = useContext(tripsContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getTrips();
  }, []);
  useEffect(() => {
    getRegion();
  }, []);

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 460,
      behavior: "smooth",
    });
  }

  const tripsPerPage = 9;
  const pagesVisited = pageNumber * tripsPerPage;

  const pageCount = Math.ceil(trips.length / tripsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayTrips = trips
    .slice(pagesVisited, pagesVisited + tripsPerPage)
    .map((item) => <TripsCard item={item} key={item.id} />);

  return (
    <>
      <div className="list">{displayTrips}</div>
      {trips.length > 9 ? (
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
          onClick={scrollToTop}
        />
      ) : null}
    </>
  );
};

export default TripsList;
