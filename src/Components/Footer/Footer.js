import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container container_footer">
          <div className="right_block">
            <ul>
              <li>
                <div className="logo_guide"></div>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_fixed">
        <div className="container">
          <div className="footer_right">
            <ul>
              <li>На связи 24/7</li>
              <li>+996555005500</li>
              <li>+996555005500</li>
              <li>+996555005500</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
