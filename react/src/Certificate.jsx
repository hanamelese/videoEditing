import React from "react";

const Certificate = () => {
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
        {" "}
        My Works
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "100px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgb(131, 201, 201), rgba(0, 0, 0, 0))",
            height: "300px",
            width: "350px",
            borderRadius: "10%",
            boxShadow: "2px 2px 5px  white,0 0 5px  yellow ",
            border: "1px solid white",
          }}
        ></div>

        <div
          style={{
            background:
              "linear-gradient(to bottom, rgb(222, 212, 177), rgb(131, 201, 201))",
            height: "700px",
            width: "3px",
            borderRadius: "10%",
            //boxShadow: "0px 2px 5px  white,0 0 5px  wheat ",
            border: "1px solid white",
          }}
        ></div>

        <div
          style={{
            background:
              "linear-gradient(to bottom, rgb(131, 201, 201), rgba(100, 99, 99, 0))",
            height: "300px",
            width: "350px",
            marginTop: "305px",
            borderRadius: "10%",
            boxShadow: "2px 2px 5px  white,0 0 5px  yellow ",
            border: "1px solid white",
          }}
        ></div>
      </div>
    </>
  );
};

export default Certificate;
