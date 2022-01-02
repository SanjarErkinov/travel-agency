import React, { useState, useEffect } from "react";
import "./ScrollUp.css";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollUp = () => {
  const rootElement = document.documentElement;

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [display, setDisplay] = useState({
    display: "none",
  });
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="scroll">
      <FaArrowCircleUp
        onClick={scrollToTop}
        className="scrollButton"
        style={display}
      />
    </div>
  );
};

export default ScrollUp;
