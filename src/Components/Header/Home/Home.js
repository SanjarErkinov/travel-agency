import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import "./Home.css";
import TripsList from "../../Trips/TripsList";
import bg from "../../../assets/mountain.jpg";
import PowersLap from "../../../assets/backVideo.mp4";
import Content from "../../Content/Content";

const Home = () => {
  return (
    <>
      <div
        className="mountainTitle"
        style={{
          height: "230px",
          marginTop: 135,
          background: `no-repeat center/100% url('${bg}')`,
        }}
      >
        Путешествуй по Кыргызстану с explore.kg!
      </div>
      <div className="container container_home">
        <div className="filterBlock">
          <video
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          >
            <source src={PowersLap} type="video/mp4" />
          </video>
        </div>
        <TripsList />
        <LoremIpsum p={4} />
        <Content />
      </div>
    </>
  );
};

export default Home;
