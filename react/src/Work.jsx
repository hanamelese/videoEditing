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
