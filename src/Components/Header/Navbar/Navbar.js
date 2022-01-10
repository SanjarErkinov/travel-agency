import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import {
  GiMountains,
  GiMountaintop,
  GiMountainRoad,
  GiRamProfile,
} from "react-icons/gi";
import { MdLocationCity } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { tripsContext } from "../../../contexts/TripsContext";
import { useAuth } from "../../../contexts/AuthContext";

const Navbar = () => {
  const { getRegion } = useContext(tripsContext);
  const [displayImgObl, setDisplayImgObl] = useState({});
  const controlImgObl = () => {
    if (window.scrollY > 100) {
      setDisplayImgObl({ opacity: "0", height: "0px" });
    } else {
      setDisplayImgObl({ opacity: "1" });
    }
  };

  const location = useLocation();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", controlImgObl);
    return () => {
      window.removeEventListener("scroll", controlImgObl);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="top_navbar">
        <div className="container top_navbar__block">
          <div className="right_block">
            <ul>
              <li>Коммерческий курс</li>
              <li>Отзыв</li>
              <li>О компании</li>
              <li>Контакты</li>
              <li>
                <a href="/" style={{ color: "inherit" }}>
                  Главная
                </a>
              </li>
              {email === "mirdin@mail.ru" ? (
                <Link to="/admin" style={{ color: "inherit" }}>
                  <li>Админ</li>
                </Link>
              ) : null}
            </ul>
          </div>
          {location.pathname === "/auth" ? (
            <Link to="/">
              <AiOutlineHome
                onClick={scrollToTop}
                style={{ color: "white", width: "18px", height: "18px" }}
              />
            </Link>
          ) : null}
          <div className="left_block">
            <AiOutlineInstagram className="icon_navbar" />
            <RiFacebookCircleFill className="icon_navbar" />
            <AiFillTwitterCircle className="icon_navbar" />
            <Link to={"/search"}>
              <AiOutlineSearch className="icon_navbar" name="Search" />
            </Link>
            {email ? (
              <Link to="/userWindow">
                <span className="email">{email.match(/^([^@]*)@/)[1]}</span>
              </Link>
            ) : null}
            {email ? (
              <Link to="/auth">
                <BiLogOut onClick={handleLogout} className="icon_navbar" />
              </Link>
            ) : null}
            {email ? null : (
              <Link to="/auth">
                <BiLogIn className="icon_navbar" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {location.pathname !== "/auth" ? (
        <div className="bottom_navbar">
          <div className="container bottom_navbar__block">
            <ul>
              <Link
                to={"/tripRegion/Chui"}
                style={
                  location.pathname === "/tripRegion/Chui"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Чуй")}>
                  <GiMountains className="imgObl" style={displayImgObl} />
                  Чуй
                </li>
              </Link>
              <Link
                to="/tripRegion/Issyk-Kyl"
                style={
                  location.pathname === "/tripRegion/Issyk-Kyl"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Иссык-Куль")}>
                  <FaUmbrellaBeach className="imgObl" style={displayImgObl} />
                  Иссык-Куль
                </li>
              </Link>
              <Link
                to="/tripRegion/Osh"
                style={
                  location.pathname === "/tripRegion/Osh"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Ош")}>
                  <GiMountainRoad className="imgObl" style={displayImgObl} />
                  Ош
                </li>
              </Link>
              <Link
                to="/tripRegion/Bishkek"
                style={
                  location.pathname === "/tripRegion/Bishkek"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Бишкек")}>
                  <MdLocationCity className="imgObl" style={displayImgObl} />
                  Бишкек
                </li>
              </Link>
              <li className="li_logo">
                <Link to="/">
                  <div className="logo_guide" onClick={scrollToTop}></div>
                </Link>
              </li>
              <Link
                to="/tripRegion/Batken"
                style={
                  location.pathname === "/tripRegion/Batken"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Баткен")}>
                  <GiMountainRoad className="imgObl" style={displayImgObl} />
                  Баткен
                </li>
              </Link>
              <Link
                to="/tripRegion/Talas"
                style={
                  location.pathname === "/tripRegion/Talas"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Талас")}>
                  <GiMountaintop className="imgObl" style={displayImgObl} />
                  Талас
                </li>
              </Link>
              <Link
                to="/tripRegion/Jalal-Abad"
                style={
                  location.pathname === "/tripRegion/Jalal-Abad"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Жалал-Абад")}>
                  <GiMountains className="imgObl" style={displayImgObl} />
                  Жалал-Абад
                </li>
              </Link>
              <Link
                to="/tripRegion/Naryn"
                style={
                  location.pathname === "/tripRegion/Naryn"
                    ? { borderBottom: "3px solid green" }
                    : { borderBottom: "3px solid white" }
                }
              >
                <li onClick={(e) => getRegion("Нарын")}>
                  <GiRamProfile className="imgObl" style={displayImgObl} />
                  Нарын
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
