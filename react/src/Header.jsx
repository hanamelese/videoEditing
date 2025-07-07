import React, { useEffect, useState } from "react";
import "./headerStyle.css";
import camera2 from "./assets/robert-shunev-mS1nlYbq1kA-unsplash.jpg";
const Header = () => {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const Interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 1500);
    }, 3000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          height: "40px",
          paddingLeft: "0px",
        }}
      >
        <img
          src={camera2}
          className={spinning ? "spin-slow" : ""}
          style={{ height: "25px", width: "35px" }}
        ></img>
        <div style={{ fontFamily: "Dancing Script", letterSpacing: "3px" }}>
          <span style={{ color: "red", fontSize: "22px" }}> G</span>eorge
        </div>
      </div>
      <div className="link" style={{ color: "white" }}>
        <a
          href="#home"
          className="header Home"
          style={{ fontFamily: "Rock Salt" }}
        >
          Home
        </a>
        <a
          href="#work"
          className="header Works"
          style={{ fontFamily: "Rock Salt" }}
        >
          Works
        </a>
        <a
          href="#contact"
          className="header Contact"
          style={{ fontFamily: "Rock Salt" }}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
