import React, { useContext, useState } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import TripsCard from "../Trips/TripsCard";
import ReactPaginate from "react-paginate";
import "./Filter.css";

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
  console.log(displayRegions);

  return (
    <div className="container regions">
      {displayRegions.length ? (
        <>
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
        </>
      ) : (
        <div>"нет ничего"</div>
      )}
    </div>
  );
};
export default RegionList;
