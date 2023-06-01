import React from "react";
import Navbar from "./Navbar";
import "../CSS/About.css";
const About = () => {
  return (
    <>
      <img id="aboutimg-1" src={require("../Image/about -1.jpg")}></img>
      <div className="sidecontent-1">
        <h1 id="leave-mark">Leave Mark </h1>
        <br></br>
        <p className="sidecontent-para">
          We're known more by the impact we create <br></br>
          than the titles we hold. Impact that is brought by <br></br>
          working together on audacious challenges at scale <br></br>
          with an aim to revolutionize for the Indian customer. <br></br>
          We believe great ideas can emerge from anywhere <br></br>
          and must be backed. Our people - backed by our <br></br>
          culture of end-to-end ownership - have revolutionised <br></br>
          India's e-commerce sector - several times over! <br></br>
        </p>
        <br></br>
      </div>
      <div className="sidecontent-2">
        <img id="aboutimg-2" src={require("../Image/about 2.jpg")}></img>
        <p className="sidecontent2-para">
          Our journey of building India's biggest unicorn <br></br>
          start-up has been full of successes, but also failures <br></br>
          and learning from them. That's why there's calculated <br></br>
          risk-taking, a high willingness to learn and improvise, <br></br>
          and a growth orientation built into everything we do. <br></br>
          Whether it be opening a new warehouse, or making <br></br>
          our mobile app a bit more consumer friendly, we're <br></br>
          always experimenting, learning and growing! <br></br>
        </p>
      </div>
      <div className="sidecontent-3">
        <img id="aboutimg-3" src={require("../Image/about-3.jpg")}></img>
        <p className="sidecontent3-para">
          The best people make the best teams. And we put all <br></br>
          our efforts into finding the right people that fit into <br></br>
          our high-performing inclusive teams. Everyone has a <br></br>
          voice on the table and diversity of thoughts, styles <br></br>
          and actions is celebrated. From a category leader to a <br></br>
          wishmaster, we are all bound together and guided by <br></br>
          our values of audacity, bias for action, customer-first, <br></br>
          integrity and inclusion. <br></br>
        </p>
      </div>
    </>
  );
};

export default About;
