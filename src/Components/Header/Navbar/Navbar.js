import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "../../Filter/Search";
import { tripsContext } from "../../../contexts/TripsContext";

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
            </ul>
          </div>
          <div className="left_block">
            <AiOutlineInstagram className="icon_navbar" />
            <RiFacebookCircleFill className="icon_navbar" />
            <AiFillTwitterCircle className="icon_navbar" />
            <MdOutlineLanguage className="icon_navbar icon_navbar_lang" />
            <select>
              <option>ru</option>
              <option>en</option>
            </select>
            <Search />
          </div>
        </div>
      </div>
      <div className="bottom_navbar">
        <div className="container bottom_navbar__block">
          <ul>
            <Link to={`/tripRegion/${"Chui"}`}>
              <li onClick={(e) => getRegion("Чуй")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Чуй
              </li>
            </Link>
            <Link to={`/tripRegion/${"Osh"}`}>
              <li onClick={(e) => getRegion("Ош")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Ош
              </li>
            </Link>
            <Link to={`/tripRegion/${"Issyk-Kyl"}`}>
              <li onClick={(e) => getRegion("Иссык-Куль")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Иссык-Куль
              </li>
            </Link>
            <Link to={`/tripRegion/${"Bishkek"}`}>
              <li onClick={(e) => getRegion("Бишкек")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Бишкек
              </li>
            </Link>
            <li className="li_logo">
              <Link to="/">
                <div className="logo_guide" onClick={scrollToTop}></div>
              </Link>
            </li>
            <Link to={`/tripRegion/${"Batken"}`}>
              <li onClick={(e) => getRegion("Баткен")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Баткен
              </li>
            </Link>
            <Link to={`/tripRegion/${"Talas"}`}>
              <li onClick={(e) => getRegion("Талас")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Талас
              </li>
            </Link>
            <Link to={`/tripRegion/${"Jalal-Abad"}`}>
              <li onClick={(e) => getRegion("Жалал-Абад")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Жалал-Абад
              </li>
            </Link>
            <Link to={`/tripRegion/${"Naryn"}`}>
              <li onClick={(e) => getRegion("Нарын")}>
                <img
                  src="https://w7.pngwing.com/pngs/309/689/png-transparent-computer-icons-passenger-baggage-travel-travel-angle-text-hand.png"
                  alt="imgObl"
                  className="imgObl"
                  style={displayImgObl}
                />
                Нарын
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
