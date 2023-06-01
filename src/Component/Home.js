import React from "react";
import Product from "./Products";
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark text-white border-0">
          <img
            src={require("../Image/woman.jpg")}
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVAL
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
            </div>

            {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
          </div>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Home;
