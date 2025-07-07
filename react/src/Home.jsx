import React from "react";
import camera3 from "./assets/camera3.jpg";
import cameraman from "./assets/cameraman.jpg";
import "./home.css";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "100px",
      }}
      className="home"
    >
      <img
        src={cameraman}
        style={{
          height: "370px",
          width: "470px",
          right: "0px",
        }}
        alt="cameraman"
        className="cameraMan"
      ></img>
      <div className="decoration">
        <div
          style={{
            background:
              "linear-gradient(rgb(171, 237, 237),rgba(120, 119, 119, 0)",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            clipPath: "polygon(50 30,50%,100%,0 50)",
            opacity: 1,
            zIndex: 1,
            marginTop: "80px",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(rgb(119, 180, 180),rgba(0,0,0,0)",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            height: "200px",
            width: "3px",
            marginLeft: "40%",
          }}
        ></div>
      </div>
      <div
        style={{
          marginTop: "90px",
          backgroundColor: "black",
          marginLeft: "3%",
        }}
      >
        <h1
          className="mainTitle"
          style={{ color: "aqua", fontFamily: "poppin" }}
        >
          I am{" "}
          <span
            style={{
              color: "wheat",
              fontFamily: "poppin",
            }}
          >
            <Typewriter
              words={[
                " Editor",
                "Photographer",
                "Video Grapher",
                "Film Maker",
                "Digital Creator",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <h3
          style={{
            fontFamily: "poppins",
            color: "smokey-white",
            margin: "30px 0",
          }}
        >
          Visual storytelling through photography, film, and editing.
        </h3>
        <a
          href="#contact"
          className="getInTouch"
          style={{
            backgroundColor: "#e63946",
            color: "black",
            padding: "15px 35px",
            borderRadius: "25px",
            fontWeight: "bold",
            textDecoration: "none",
            // fontFamily: "Rock Salt",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          Get in touch
        </a>

        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "100px",
          }}
        >
          <a href="https://www.instagram.com/george__ve?igsh=MWNhMWM1Y241ZzJ1Zw==">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://t.me/George_negative">
            <i className="fab fa-telegram"></i>
          </a>

          <a href="https://www.tiktok.com/@george_ve?_t=ZM-8xV6Dsbc9DR&_r=1">
            <i className="fab fa-tiktok"></i>
          </a>

          <a href="https://www.instagram.com/ktab_pictures?igsh=cXJtc3pwZzU5ZXk=">
            <i className="fas fa-camera"></i>
          </a>

          <a href="https://www.youtube.com/@GeorgeNegative">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <img
        src={camera3}
        style={{
          height: "230px",
          width: "340px",
          right: "0px",
          marginTop: "50px",
        }}
        alt="camera3"
        className="camera3"
      ></img>
    </div>
  );
};

export default Home;
