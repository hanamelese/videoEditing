import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ciscoImg from "./assets/ciscoImg.jpg";
import jsImg from "./assets/jsImg.jpg";
import webImg from "./assets/weImg.jpg";
import linux from "./assets/pic3.jpg";

const certificateData = [
  {
    title: "Cisco Cyber Security",
    subtitle: "Udemy - 2023",
    description: "Mastered ES6, DOM manipulation, and asynchronous JS.",
    bgColor: "#121a2f",
    image: jsImg,
  },
  {
    title: "Cisco Linux",
    subtitle: "freeCodeCamp - 2022",
    description: "Built responsive designs using HTML, CSS, and Flexbox.",
    bgColor: "#121a2f",
    image: linux,
  },
  {
    title: "Programming",
    subtitle: "Packet Tracer",
    description:
      "Completed a professional certificate in networking with Packet Tracer.",
    bgColor: "#121a2f",
    image: ciscoImg,
  },

  {
    title: "Cisco Networking",
    subtitle: "freeCodeCamp - 2022",
    description: "Built responsive designs using HTML, CSS, and Flexbox.",
    bgColor: "#121a2f",
    image: webImg,
  },
];

const Certificate = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
          fontFamily: "Poppins",
        }}
      >
        Sample Photograph
      </h1>
      <div
        style={{
          backgroundColor: "#e63946",
          color: "white",
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
        Watch all Photograph{" "}
        <a href="https://www.instagram.com/ktab_pictures?igsh=cXJtc3pwZzU5ZXk=">
          <i style={{ color: "white" }} className="fas fa-camera"></i>
        </a>
      </div>
      <VerticalTimeline lineColor="wheat">
        {certificateData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: item.bgColor,
              color: "wheat",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
              maxWidth: "400px", // ✅ Limit width
              padding: "10px", // ✅ Reduce padding
            }}
            contentArrowStyle={{ borderRight: "7px solid wheat" }}
            iconStyle={{
              background: item.bgColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBlockColor: "wheat",
            }}
            icon={
              <img
                src={item.image}
                alt="icon"
                style={{
                  width: "100%",

                  // objectFit: "contain",
                  borderRadius: "30%",
                }}
              />
            }
          >
            {/* <h3 className="vertical-timeline-element-title">{item.title}</h3> */}

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",

                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Certificate;
