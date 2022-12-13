import React from "react";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/auth" ? (
        <div className="footer">
          <div className="footerTop__right_block">
            <ul className="ulTop">
              <li>
                <p className="logo_guide"></p>
              </li>
              <li>
                <p>
                  <AiOutlineInstagram className="footerIcon" />
                  <RiFacebookCircleFill className="footerIcon" />
                  <AiFillTwitterCircle className="footerIcon" />
                </p>
              </li>
            </ul>
            <ul className="ulTop textUlTop">
              <li>Авиабилеты</li>
              <li>ВИП-зал аэропорта</li>
              <li>Туры за рубеж из Бишкека.</li>
              <li>Горящие туры и лучшие предложения для вашего отдыха!</li>
              <li>Учеба за границей</li>
              <li>TravelSim</li>
              <li>Визы</li>
              <li>Страхование</li>
            </ul>
            <ul className="ulTop textUlTop">
              <li>Отели</li>
              <li>Транспорт</li>
              <li>Организация конференций</li>
              <li>Кейтеринг от Kyrgyz Concept в Бишкеке, Кыргызстане</li>
              <li>Аутстаффинг от Kyrgyz Concept в Бишкеке, Кыргызстане</li>
              <li>Сделано в Makers</li>
            </ul>
            <ul className="ulTop textUlTop">
              <li>Оставить отзыв</li>
              <li>Контакты офисов</li>
              <li>Новости компании</li>
              <li>Вакансии</li>
              <li>Подписка на новости и спецпредложения</li>
              <li>
                <span style={{ color: "black", fontWeight: "600" }}>
                  Увидели ошибку на сайте? Выделите слово, нажмите Shift+Enter.
                  И мы его исправим.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <div className="footer_fixed">
        <div className="container footer_right">
          <ul className="ulBottom">
            <li className="firstLi">На связи 24/7</li>
            <li>
             <span>+996</span> 704 542 779
            </li>
            <li>
            <span>+996</span> 706 478 479
            </li>
            <li>
            <span>+996</span> 555 005 500
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
