import React from "react";
import { GiMountains } from "react-icons/gi";
import "./Content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="section1">
        <h2>Наши партнеры</h2>
        <p>
          <GiMountains className="iconContent" />
          <GiMountains className="iconContent" />
          <GiMountains className="iconContent" />
        </p>
        <p>
          <span>Makers</span>
          <span>Makers</span>
          <span>Makers</span>
        </p>
      </div>
      <div className="section2">
        <h2>Почему многие клиенты выбирают Guide?</h2>
        <ul>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
          <li>
            <p>
              <GiMountains className="iconContent2" />
              <span>Гарантия лучшей цены!</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
