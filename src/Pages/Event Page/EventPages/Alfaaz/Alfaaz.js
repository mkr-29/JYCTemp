import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import alfaz from "./Assets/alfaz.JPG";
import alfaz1 from "./Assets/alfaz1.JPG";
import alfaz2 from "./Assets/alfaz2.JPG";
import alfaz3 from "./Assets/alfaz3.JPG";
import alfaz4 from "./Assets/alfaz4.JPG";
import alfaz5 from "./Assets/alfaz5.JPG";

export default function Alfaaz() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={alfaz}
          alt="Alfaz"
          title="Alfaz"
          date=""
          about="ALFAAZ '22, hosted by JUIT Youth Club's Literary and Debating Club, merged literature, art, and culture against the stunning Himalayan backdrop. The event featured the JUIT Youth Parliament (JYP), a high-level debating competition, a Bollywood Night with participants dressed as iconic characters, and Lafz, The Poetry Night, celebrating poetic expressions. Attendees were captivated by the mesmerizing events, creating unforgettable memories of literature, art, and culture amidst the majestic Himalayas."
          img1={alfaz1}
          alt1="Alfaz"
          img2={alfaz2}
          alt2="Alfaz"
           img3={alfaz3}
          alt3="Alfaz"
          img4={alfaz4}
          alt4="Alfaz"
          img5={alfaz5}
          alt5="Alfaz"
        />
      </div>
      <Footer/>
    </div>
  );
}
