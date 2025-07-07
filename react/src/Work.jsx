import React from "react";
import temeyto from "./assets/temeyto.png";
import "./css/work.css";
import AA from "./assets/AA.png";
import photo from "./assets/Screenshot (318).png";
const Work = () => {
  return (
    <>
      <h1
        style={{
          marginTop: "100px",
          marginLeft: "40%",
          marginBottom: "50px",
          fontFamily: "poppins",
        }}
      >
        Sample Works
      </h1>
      <div
        style={{
          backgroundColor: "#e63946",
          color: "black",
          padding: "10px 35px",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          width: "210px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          margin: "20px 60px",
        }}
      >
        <a href="https://www.youtube.com/@GeorgeNegative">
          My You Tube Channel{" "}
          <i style={{ color: "white" }} className="fab fa-youtube"></i>
        </a>
      </div>
      <div style={{ marginLeft: "10%" }} className="video">
        <a href="https://youtu.be/vJZ3wj4dSME?si=Lyh1A3XwbqdOs7vC">
          <img src={temeyto}></img>
        </a>

        <a href="https://youtu.be/W5cfQgalVnM?si=vcIUlJaQU_51W5Bv">
          <img src={AA}></img>
        </a>

        <a href="https://youtu.be/vJZ3wj4dSME?si=Lyh1A3XwbqdOs7vC">
          <img src={photo}></img>
        </a>

        <a href="https://youtu.be/vJZ3wj4dSME?si=Lyh1A3XwbqdOs7vC">
          <img src={photo}></img>
        </a>

        <a href="https://youtu.be/W5cfQgalVnM?si=vcIUlJaQU_51W5Bv">
          <img src={AA}></img>
        </a>

        <a href="https://youtu.be/W5cfQgalVnM?si=vcIUlJaQU_51W5Bv">
          <img src={AA}></img>
        </a>
      </div>
    </>
  );
};

export default Work;
