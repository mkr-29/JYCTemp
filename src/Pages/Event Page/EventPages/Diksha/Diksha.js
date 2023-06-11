import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import diksha from "./Assets/diksha.JPG";
import diksha1 from "./Assets/diksha1.JPG";
import diksha2 from "./Assets/diksha2.JPG";
import diksha3 from "./Assets/diksha3.JPG";
import diksha4 from "./Assets/diksha4.JPG";
import diksha5 from "./Assets/diksha5.JPG";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Diksha() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={diksha}
          alt="Diksha"
          title="Diksha"
          date="Date: 1st October 2022"
          about="Diksha: Embracing New Beginnings is an event exclusively organized for freshers at our college. It fosters a warm and welcoming environment, introducing students to academics, extracurriculars, and campus life. Through interactive sessions, ice-breakers, and workshops, freshers build connections and gain essential skills. The event culminates in a cultural showcase, celebrating their talents. Diksha ignites a sense of belonging and empowers freshers for a remarkable college journey."
          img1={diksha1}
          alt1="Diksha"
          img2={diksha2}
          alt2="Diksha"
          img3={diksha3}
          alt3="Diksha"
          img4={diksha4}
          alt4="Diksha"
          img5={diksha5}
          alt5="Diksha"
        />
      </div>
      <Footer/>
    </div>
  );
}
