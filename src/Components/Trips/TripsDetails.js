import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Carousel from "react-material-ui-carousel";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { favContext } from "../../contexts/FavContext";
import { tripsContext } from "../../contexts/TripsContext";
import Comments from "../Comments/Comments";
import Content from "../Content/Content";
import OrderForm from "../OrderForm/OrderForm";
import "./Trips.css";

const TripsDetails = () => {
  const { tripsDetails, getTripsDetails, deleteTrip } =
    useContext(tripsContext);
  const { addToFavorite, color } = useContext(favContext);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    user: { email },
  } = useAuth();

  let params = useParams().id;

  useEffect(() => {
    getTripsDetails(params);
  }, [color]);

  let countDay = null;
  let countNight = null;

  if (tripsDetails.departureDate && tripsDetails.arrivalDate) {
    countDay =
      Number(tripsDetails.arrivalDate.match(/\d[^-]+$/)) -
      Number(tripsDetails.departureDate.match(/\d[^-]+$/)) +
      1;
    countNight = countDay - 1;
  } else console.log("error");

  return (
    <>
      {modalOpen ? <OrderForm close={setModalOpen} /> : null}
      {tripsDetails ? (
        <>
          <img src={`${tripsDetails.img1}`} alt="img1" className="detailsImg" />
          <div className="container details">
            <div className="details__left">
              <h1>{tripsDetails.title}</h1>
              <div className="details__left_ul">
                <ul>
                  <li>
                    В стоимость включено:
                    <li>-трансфер</li>
                    <li>-экскурсия</li>
                  </li>
                  <li>
                    Сезонность:<li>Лето/Зима</li>
                  </li>
                  <li>
                    Отзывы:
                    <li className="review">
                      {tripsDetails.comments ? tripsDetails.comments.length : 0}
                    </li>
                  </li>
                </ul>
              </div>
              <p>{tripsDetails.description}</p>
            </div>
            <div className="details__right">
              <div className="details__price">
                <div className="details__price_top">
                  <h2>{tripsDetails.price} KGS</h2>
                  <span>({Math.round(tripsDetails.price / 85)} $)</span>
                  <p className="details__price_top-p">лучшая цена</p>
                </div>
                <div className="details__price_bottom">
                  {tripsDetails.departureDate ? (
                    <span>
                      Дней: {countDay > 0 ? countDay : 1} / Ночей:{" "}
                      {countNight > 0 ? countNight : 0}
                    </span>
                  ) : (
                    <Loader
                      type="Oval"
                      color="#00BFFF"
                      height={30}
                      width={30}
                      className="loader"
                    />
                  )}
                  <p
                    className="details__price_bottom-p"
                    onClick={() => setModalOpen(true)}
                  >
                    Забронируй сейчас!
                  </p>
                </div>
                {email ? (
                  <button
                    className="btnFav"
                    onClick={() =>
                      addToFavorite({ ...tripsDetails }, tripsDetails.id)
                    }
                  >
                    В избранное
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container">
            <h3>Галерея</h3>
            <hr />
            <Carousel interval={4000} className="carousel">
              <img
                src={`${tripsDetails.img1}`}
                alt="img1"
                className="carouselImg"
              />
              <img
                src={`${tripsDetails.img2}`}
                alt="img1"
                className="carouselImg"
              />
              <img
                src={`${tripsDetails.img3}`}
                alt="img1"
                className="carouselImg"
              />
            </Carousel>
          </div>
          <div className="container">
            <h3>Отзывы</h3>
            <hr />
            <Comments id={params} tripsDet={tripsDetails} />
          </div>
          {email === "mirdin@mail.ru" ? (
            <div className="container">
              <Link to={`/tripUpdate/${params}`}>
                <button>Редактировать</button>
              </Link>

              <Link to="/">
                <button onClick={() => deleteTrip(params)}>Удалить</button>
              </Link>
            </div>
          ) : null}
        </>
      ) : (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          className="loader"
        />
      )}

      <Content />
    </>
  );
};

export default TripsDetails;
