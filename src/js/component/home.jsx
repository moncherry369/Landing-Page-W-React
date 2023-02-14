import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="page text-center">
      <Navbar />
      {/* Nav takes up whole top l->r */}
      <div className="below-nav">
        <Jumbotron />
        <div className="card-container">
          <div className="column">
          <Card />
          </div>
          <div className="column">
          <Card />
          </div>
          <div className="column">
          <Card />
          </div>
          <div className="column">
          <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
