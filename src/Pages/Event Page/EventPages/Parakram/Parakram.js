import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import parakram from "./Assets/parakram.JPG";
import parakram1 from "./Assets/parakram1.JPG";
import parakram2 from "./Assets/parakram2.JPG";
import parakram3 from "./Assets/parakram3.JPG";
import parakram4 from "./Assets/parakram4.JPG";
import parakram5 from "./Assets/parakram5.JPG";

export default function Parakram() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={parakram}
          alt="Parakram"
          title="Parakram"
          date=""
          about="Parakram, a thrilling sports event, brings together universities for competitive matches in football, basketball, volleyball, tennis, and more. Our university hosts the event, attracting students from all over to cheer for their teams. With our university also participating, it creates an electric atmosphere as teams from different universities come together to showcase their skills and sportsmanship."
          img1={parakram1}
          alt1="Parakram"
          img2={parakram2}
          alt2="Parakram"
           img3={parakram3}
          alt3="Parakram"
          img4={parakram4}
          alt4="Parakram"
          img5={parakram5}
          alt5="Parakram"
        />
      </div>
      <Footer/>
    </div>
  );
}
