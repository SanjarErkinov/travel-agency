import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import "./Home.css";
import TripsList from "../../Trips/TripsList";
import bg from "../../../assets/mountain.jpg";

const Home = () => {
  return (
    <>
      <div
        className="mountainTitle"
        style={{
          height: "210px",
          marginTop: 180,
          background: `no-repeat center/100% url('${bg}')`,
        }}
      >
        Путешествуй по Кыргызстану с нами!
      </div>
      <div className="container container_home">
        <TripsList />
        <LoremIpsum p={8} />
      </div>
    </>
  );
};

export default Home;
